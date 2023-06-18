import { renameSync } from "node:fs";
import { access, constants } from "node:fs/promises";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const initialName = join(__dirname, "files", "wrongFilename.txt");
const newName = join(__dirname, "files", "properFilename.md");

const rename = async () => {
  access(initialName, constants.F_OK) // check if init file exists
    .then(() => {
      access(newName, constants.F_OK) // check if new file exists
        .then(() => console.log("FS operation failed"))
        .catch(() => {
          renameSync(initialName, newName, (err) => console.log(err.message));
        });
    })
    .catch(() => console.log("FS operation failed"));
};

await rename();
