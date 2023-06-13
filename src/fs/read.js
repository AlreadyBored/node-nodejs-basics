import fs from "node:fs/promises";
import { existsWrapper, joinToURL } from "../helpers.js";

const readOrThrow = existsWrapper({
  onExists: async (path) => {
    const fileContent = await fs.readFile(path, {
      encoding: "utf-8",
    });

    console.log(fileContent);
    return fileContent;
  },
});

const read = async () => {
  const resultFilePath = joinToURL(import.meta.url, "files", "fileToRead.txt");

  return readOrThrow(resultFilePath);
};

await read();
