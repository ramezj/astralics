/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Board` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `Board` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Board" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Board_name_key" ON "Board"("name");
