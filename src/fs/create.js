import { promises as fs } from "fs";

const create = async () => {
  // Write your code here
  const filePath = "./files/fresh.txt";
  try {
    await fs.access(filePath);
    throw new Error("FS operation failed: file already exists");
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw err;
    }
    await fs.writeFile(filePath, "I am fresh and young");
  }
};

await create();
