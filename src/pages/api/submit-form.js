import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const neon = new Pool({
      connectionString: process.env.POSTGRES_PRISMA_URL,
    });
    const adapter = new PrismaNeon(neon);
    const prisma = new PrismaClient({ adapter });
    const { country, city, telegram, tradeAmount } = req.body;

    // Basic validation
    if (!country || !city || !telegram || !tradeAmount) {
      return res
        .status(400)
        .json({ error: "Please complete all required fields." });
    }

    try {
      const submission = await prisma.formSubmission.create({
        data: {
          country,
          city,
          telegram,
          amount: parseFloat(tradeAmount),
        },
      });

      const message = `New Trade Request:\nCountry: ${country}\nCity: ${city}\nTelegram: @${telegram}\nAmount: $${tradeAmount}`;
      const url = `https://api.telegram.org/bot${
        process.env.TELEGRAM_BOT_TOKEN
      }/sendMessage?chat_id=${
        process.env.TELEGRAM_CHAT_ID
      }&text=${encodeURIComponent(message)}`;
      await fetch(url);
      res.status(200).json({ success: true, data: submission });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
