import fs from "node:fs/promises";
import { existsWrapper, joinToURL } from "../helpers.js";

const deleteOrThrow = existsWrapper({
  onExists: (path) => fs.rm(path),
});

const remove = async () => {
  const resultFilePath = joinToURL(
    import.meta.url,
    "files",
    "fileToRemove.txt"
  );

  return deleteOrThrow(resultFilePath);
};

await remove();
