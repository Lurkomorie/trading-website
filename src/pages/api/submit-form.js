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

      // Close the Prisma Client connection
      await prisma.$disconnect();

      const message = `New Trade Request:
        Country: ${country}
        City: ${city}
        Telegram: @${telegram}
        Amount: $${tradeAmount}`;

      const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

      // Send the message using POST method
      const telegramResponse = await fetch(telegramUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        }),
      });

      const telegramResult = await telegramResponse.json();

      if (!telegramResponse.ok) {
        return res
          .status(500)
          .json({ error: "Failed to send message to Telegram." });
      }

      res.status(200).json({ success: true, data: submission });
    } catch (error) {
      // Close the Prisma Client connection in case of error
      await prisma.$disconnect();

      res.status(500).json({ error: "Internal server error." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
