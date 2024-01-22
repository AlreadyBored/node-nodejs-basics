import fs from "fs";
import getPath from "../helper/getPath.js";

const read = async (filePath) => {
  const openedFile = await fs.promises.open(filePath, "r");

  const stream = openedFile.createReadStream();

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("end", () => {
    process.stdout.write("\n");
  });
};

const readFile = getPath(import.meta, "files", "fileToRead.txt");
await read(readFile);
