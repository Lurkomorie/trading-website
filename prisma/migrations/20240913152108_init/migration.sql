-- CreateTable
CREATE TABLE "FormSubmission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
