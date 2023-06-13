import fs from "node:fs";
import { joinToURL } from "../helpers.js";

const write = async () => {
  const filePath = joinToURL(import.meta.url, "files", "fileToWrite.txt");

  const writeStream = fs.createWriteStream(filePath, {
    encoding: "utf-8",
  });

  process.stdin.pipe(writeStream);
};

await write();
