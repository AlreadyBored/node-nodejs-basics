import * as fs from "node:fs/promises";
import { folderPath } from "./create.js";

const filePath = folderPath + "/fileToRead.txt";

const read = async () => {
  try {
    const files = await fs.readdir(folderPath);
    if (files.includes("fileToRead.txt")) {
      const data = await fs.readFile(filePath, "utf8");
      console.log(data);
    } else {
      console.log("FS operation failed");
    }
  } catch (error) {
    console.log(error);
  }
};

await read();
