import fs from "node:fs/promises";
import path from "node:path";
import { existsWrapper, joinToURL } from "../helpers.js";

const copy = async () => {
  const fromFilePath = joinToURL(import.meta.url, "files");
  const toFilePath = joinToURL(import.meta.url, "files_copy");

  return existsWrapper({
    onExists: async (fromPath) => {
      return existsWrapper({
        onDoesntExists: async (toPath) => {
          const files = await fs.readdir(fromPath);
          await fs.mkdir(toPath);
          await Promise.all(
            files.map((fileName) => {
              return fs.copyFile(
                path.join(fromPath, fileName),
                path.join(toPath, fileName)
              );
            })
          );
        },
      })(toFilePath);
    },
  })(fromFilePath);
};

await copy();
