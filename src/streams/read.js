import fs from "node:fs";
import path from "node:path";

const read = async () => {
  const pathFile = path.join(import.meta.dirname, "files", "fileToRead.txt");
  const readStream = fs.createReadStream(pathFile, { encoding: "utf-8" });

  readStream.on("error", (error) => {
    console.error("Failed to read file:", error);
  });

  readStream.pipe(process.stdout);
};

await read();

