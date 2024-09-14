import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const submissions = await prisma.formSubmission.findMany();
      res.status(200).json({ success: true, data: submissions });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}