import { mkdirSync, readdirSync } from "node:fs";
import { access, constants, copyFile } from "node:fs/promises";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const folderPath = join(__dirname, "files");
const targetFolderPath = join(__dirname, "files_copy");

const copy = async () => {
  access(folderPath, constants.F_OK) // check if folder files exist
    .then(() => {
      access(targetFolderPath, constants.F_OK)
        .then(() => console.log("FS operation failed")) // folder files_copy already exists
        .catch(async () => {
          mkdirSync(targetFolderPath); // create folder files_copy

          const files = await readdirSync(folderPath);

          files.forEach((file) => {
            copyFile(join(folderPath, file), join(targetFolderPath, file))
              .then(() => console.log("file is copied"))
              .catch(() => console.log("FS operation failed"));
          });
        });
    })
    .catch(() => console.log("FS operation failed")); // folder files doesn't exists
};

await copy();
