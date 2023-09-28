/*
  Warnings:

  - You are about to drop the column `projectId` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `boardId` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userId_fkey";

-- DropIndex
DROP INDEX "Board_name_key";

-- AlterTable
ALTER TABLE "Board" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "projectId",
ADD COLUMN     "boardId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Project";

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
