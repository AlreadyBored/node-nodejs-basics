import { readdirSync } from "node:fs";
import { access, constants } from "node:fs/promises";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const folderPath = join(__dirname, "files");
const list = async () => {
  access(folderPath, constants.F_OK) // check if folder files exist
    .then(async () => {
      try {
        const files = await readdirSync(folderPath);
        console.log(files);
      } catch (err) {
        console.log(err.message);
      }
    })
    .catch(() => console.log("FS operation failed"));
};

await list();
