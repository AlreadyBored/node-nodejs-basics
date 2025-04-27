import { promises } from "fs";
import { join } from "path";

const create = async () => {
  const filePath = join("src", "fs", "files", "fresh.txt");
  const fsError = new Error("FS operation failed");
  
  try {
    await promises.access(filePath);
    throw new fsError();
  } catch {
    try {
      await promises.writeFile(filePath, "I am fresh and young");
    } catch {
      throw fsError;
    }
  }
};

await create();
