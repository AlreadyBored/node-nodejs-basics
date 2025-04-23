import fs from "fs/promises";
import { constants } from "fs";
import path from "path";

const create = async () => {
  const filePath = path.resolve("files", "fresh.txt");
  try {
    await fs.access(filePath, constants.F_OK);
    console.error("FS operation failed");
  } catch {
    try {
      await fs.writeFile(filePath, "I am fresh and young");
    } catch (error) {
      console.error(error);
    }
  }
};

await create();
