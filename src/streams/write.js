import fs from "fs";
import path from "path";
import { promises as fsPromises } from "fs";
import { constants } from "fs";

const write = async () => {
  const pathToFile = path.resolve("files", "fileToWrite.txt");

  try {
    await fsPromises.access(pathToFile, constants.F_OK);

    const stream = fs.createWriteStream(pathToFile, { encoding: "utf-8" });
    process.stdin.pipe(stream);
  } catch (error) {
    console.error(error);
  }
};

await write();
