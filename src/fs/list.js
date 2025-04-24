import { promises as fs } from "fs";

const list = async () => {
  const folderPath = "files";

  try {
    try {
      await fs.access(folderPath);
    } catch (error) {
      throw new Error("FS operation failed");
    }

    const files = await fs.readdir(folderPath);

    console.log(files);
  } catch (error) {
    throw error;
  }
};

await list();
