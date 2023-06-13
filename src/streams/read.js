import fs from "node:fs";
import { joinToURL } from "../helpers.js";

const read = async () => {
  const filePath = joinToURL(import.meta.url, "files", "fileToRead.txt");

  const readStream = fs.createReadStream(filePath, {
    encoding: "utf-8",
  });

  readStream.pipe(process.stdout);
};

await read();
