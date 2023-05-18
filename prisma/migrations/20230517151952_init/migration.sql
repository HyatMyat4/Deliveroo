-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "ImageURL" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureRow" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Dishes" JSONB[],

    CONSTRAINT "FeatureRow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dish" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Rating" DOUBLE PRECISION NOT NULL,
    "Genre" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "ImageURL" TEXT NOT NULL,
    "Short_description" TEXT NOT NULL,
    "RestaurantsDishes" JSONB[],
    "Long" DOUBLE PRECISION NOT NULL,
    "Lat" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantDish" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "ImageURL" TEXT NOT NULL,
    "Short_description" TEXT NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "RestaurantDish_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FeatureRow_Title_key" ON "FeatureRow"("Title");

-- CreateIndex
CREATE UNIQUE INDEX "Dish_Title_key" ON "Dish"("Title");

-- CreateIndex
CREATE UNIQUE INDEX "RestaurantDish_Title_key" ON "RestaurantDish"("Title");
