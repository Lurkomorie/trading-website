import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const neon = new Pool({
        connectionString: process.env.POSTGRES_PRISMA_URL,
      });
      const adapter = new PrismaNeon(neon);
      const prisma = new PrismaClient({ adapter });
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
