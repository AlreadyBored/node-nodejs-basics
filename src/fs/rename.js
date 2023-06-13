import fs from "node:fs/promises";
import { existsWrapper, joinToURL } from "../helpers.js";

const rename = async () => {
  const fromFilePath = joinToURL(import.meta.url, "files", "wrongFilename.txt");
  const toFilePath = joinToURL(import.meta.url, "files", "properFilename.md");

  return existsWrapper({
    onExists: (fromPath) => {
      return existsWrapper({
        onDoesntExists: (toPath) => {
          return fs.rename(fromPath, toPath);
        },
      })(toFilePath);
    },
  })(fromFilePath);
};

await rename();
