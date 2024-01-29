import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const create = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const createFilePath = path.join(basePath, "/files/fresh.txt");


  const fileContent = "I am fresh and young";
  const errorMessage = "FS operation failed";

  try {
    await fs.promises.writeFile(createFilePath, fileContent, { flag: "wx" });
  } catch (e) {
    throw new Error(errorMessage);
  }
};

await create();
