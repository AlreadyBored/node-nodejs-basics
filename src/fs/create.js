import { promises as fs } from "fs";

const create = async () => {
  try {
    await fs.writeFile("src/fs/files/fresh.txt", "I am fresh and young", {
      flag: "wx",
    });
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error("FS operation failed");
    }
    throw error;
  }
};

await create();
