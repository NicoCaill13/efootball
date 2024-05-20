/*
  Warnings:

  - You are about to drop the column `location` on the `Club` table. All the data in the column will be lost.
  - Added the required column `address` to the `Club` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Club` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Club` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `Club` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Club" DROP COLUMN "location",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "zipCode" TEXT NOT NULL;
