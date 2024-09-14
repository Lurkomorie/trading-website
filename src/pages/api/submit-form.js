import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
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

      res.status(200).json({ success: true, data: submission });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}