import { access, constants, appendFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, "files", "fresh.txt");

const create = async () => {
  access(filePath, constants.F_OK)
    .then(() => console.log("FS operation failed"))
    .catch(() => {
      appendFile(filePath, "I am fresh and young")
        .then(() => console.log("the file is created"))
        .catch((err) => console.log(err.message));
    });
};

await create();
