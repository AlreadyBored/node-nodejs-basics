import fs from "fs";
import { promises as fsPromises } from "fs";
import { constants } from "fs";
import path from "path";

const read = async () => {
  const filePatch = path.resolve("files", "fileToRead.txt");
  try {
    await fsPromises.access(filePatch, constants.F_OK);

    const stream = fs.createReadStream(filePatch, { encoding: "utf8" });
    stream.pipe(process.stdout);
  } catch (error) {
    console.error(error);
  }
};

await read();
