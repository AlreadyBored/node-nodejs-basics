import fs from "fs/promises";

const remove = async () => {
  try {
    const filePath = "./files/fileToRemove.txt";
    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (!fileExists) {
      throw new Error("File does not exist.");
    }

    await fs.unlink(filePath);
    console.log("File deleted successfully.");
  } catch (error) {
    console.error("FS operation failed:", error.message);
  }
};

await remove();
