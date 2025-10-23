import path from "path";
import fs from "fs/promises";

const create = async () => {
  const filePath = path.join("files", "fresh.txt");
  const text = "I am fresh and young";

  try {
    await fs.access(filePath);
    throw new Error("FS operation failed");
  } catch {
    try {
      await fs.writeFile(filePath, text, { flag: "wx" });
      console.log("File created successfully!");
    } catch {
      throw new Error("FS operation failed");
    }
  }
};

await create();
