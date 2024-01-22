import { access, constants, unlink } from "node:fs/promises";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const fileToDel = join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  access(fileToDel, constants.F_OK) // check if file exists
    .then(() => {
      unlink(fileToDel)
        .then(() => console.log("the file is deleted"))
        .catch((err) => console.log(err.message));
    })
    .catch(() => console.log("FS operation failed"));
};

await remove();
