import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { access, constants } from "node:fs/promises";

import { createHmac } from "node:crypto";

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");

const secret = "lou";
let dataToHash = null;

const calculateHash = async () => {
  access(filePath, constants.F_OK) // check if file exists
    .then(() => {
      readFile(filePath) // read the file
        .then((data) => {
          dataToHash = data.toString();

          const hash = createHmac("sha256", secret)
            .update(dataToHash)
            .digest("hex");
          console.log(hash);
        })
        .catch((err) => console.log(err.message));
    })
    .catch((err) => console.log(err.message));
};

await calculateHash();
