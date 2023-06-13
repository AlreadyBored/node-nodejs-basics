import fs from "node:fs/promises";
import { existsWrapper, joinToURL } from "../helpers.js";

const listOrThrow = existsWrapper({
  onExists: async (path) => {
    const files = await fs.readdir(path);
    console.log(files);
    return files;
  },
});

const list = async () => {
  const resultFilePath = joinToURL(import.meta.url, "files");

  return listOrThrow(resultFilePath);
};

await list();
