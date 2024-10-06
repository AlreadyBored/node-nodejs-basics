import { existsSync } from "fs";
import { cp } from "node:fs/promises";

const FILE_FOLDERY_PATH = "./src/fs/files";
const FILE_COPY_FOLDERY_PATH = "./src/fs/files_copy";
const ERROR_MSG = "FS operation failed";

const copy = async () => {
  if (!existsSync(FILE_FOLDERY_PATH) || existsSync(FILE_COPY_FOLDERY_PATH)) {
    throw new Error(ERROR_MSG);
  }

  cp(FILE_FOLDERY_PATH, FILE_COPY_FOLDERY_PATH, { recursive: true }, (err) => {
    if (err) console.error(err);
  });
};

await copy();
