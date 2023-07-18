/*
  Warnings:

  - You are about to drop the column `website` on the `Feedback` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "website";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "website" TEXT NOT NULL DEFAULT '';
