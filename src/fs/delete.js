import * as fs from "node:fs/promises";
import { folderPath } from "./create.js";

const filePath = folderPath + "/fileToRemove.txt";

const remove = async () => {
  try {
    const files = await fs.readdir(folderPath);
    if (!files.includes("fileToRemove.txt")) {
      console.log("FS operation failed");
    } else {
      await fs.unlink(filePath);
    }
  } catch (error) {
    console.log(error);
  }
};

await remove();
