/*
  Warnings:

  - Added the required column `deletedAt` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deletedAt` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deletedAt` to the `promotions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "deletedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "deletedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "promotions" ADD COLUMN     "deletedAt" TIMESTAMP(3) NOT NULL;
