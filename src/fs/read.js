import fs from "fs/promises";
import path from "path";
import { constants } from "fs";

const read = async () => {
  const pathToFile = path.resolve("files", "fileToRead.txt");

  try {
    await fs.access(pathToFile, constants.F_OK);
  } catch (error) {
    console.error("FS operation failed");
    return;
  }

  try {
    const data = await fs.readFile(pathToFile);
    console.log(data.toString());
  } catch (error) {
    console.error(error);
  }
};

await read();
