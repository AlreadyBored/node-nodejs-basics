import fs from "node:fs";
import path from "node:path";

const read = async () => {
  const fileName = "fileToRead.txt";
  const fullPath = path.join(
    process.cwd(),
    "src",
    "streams",
    "files",
    fileName
  );

  const readStream = fs.createReadStream(fullPath);
  readStream.pipe(process.stdout);
};

await read();
