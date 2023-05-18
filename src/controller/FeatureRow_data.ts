import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const get_FeatureRow = async (req: any, res: any) => {
  try {
    const Featurerow_data = await prisma.featureRow.findMany();
    res.status(200).json(Featurerow_data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while adding data." });
  }
};

export { get_FeatureRow };
