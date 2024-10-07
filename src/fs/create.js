import { promises as fs } from "fs";
import path from "path";

const create = async () => {
  const filePath = path.join("src", "fs", "files", "fresh.txt");
  const content = "I am fresh and young";

  const fileExists = await fs
    .stat(filePath)
    .then(() => true)
    .catch(() => false);

  if (fileExists) {
    throw new Error("FS operation failed");
  } else {
    await fs.writeFile(filePath, content);
    console.log("File created successfully.");
  }
};

await create();
