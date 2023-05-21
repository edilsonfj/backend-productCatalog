/*
  Warnings:

  - You are about to drop the column `discount` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `promotions` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `promotions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `promotions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `brand` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promotion` to the `products` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `barcode` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `name` to the `promotions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_discount_fkey";

-- DropIndex
DROP INDEX "promotions_discount_key";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "discount",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "promotion" INTEGER NOT NULL,
DROP COLUMN "barcode",
ADD COLUMN     "barcode" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "promotions" DROP COLUMN "discount",
DROP COLUMN "updatedAt",
ADD COLUMN     "name" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "brands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "models" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "models_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "brands_name_key" ON "brands"("name");

-- CreateIndex
CREATE UNIQUE INDEX "models_name_key" ON "models"("name");

-- CreateIndex
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");

-- CreateIndex
CREATE UNIQUE INDEX "promotions_name_key" ON "promotions"("name");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_brand_fkey" FOREIGN KEY ("brand") REFERENCES "brands"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_model_fkey" FOREIGN KEY ("model") REFERENCES "models"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_promotion_fkey" FOREIGN KEY ("promotion") REFERENCES "promotions"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "models" ADD CONSTRAINT "models_brand_fkey" FOREIGN KEY ("brand") REFERENCES "brands"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
