-- CreateTable
CREATE TABLE "Planets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parsecsFromEarth" REAL NOT NULL,
    "stellarMagnitude" REAL NOT NULL,
    "discoveryDate" DATETIME NOT NULL,
    "image" TEXT,
    "localRegisterDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
