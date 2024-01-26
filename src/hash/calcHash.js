import { isFileExist } from "../utils/utils.js";
import { join } from "path";
import { readFile } from "fs";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
  const fileName = join(__dirname, "files/fileToCalculateHashFor.txt");
  isFileExist(fileName);
  readFile(fileName, "utf-8", (err, data) => {
    if (err) throw "Can not read the file";
    if (data) {
      const hash = createHash("sha256").update(data).digest("hex");
      console.log(hash);
    }
  });
};

await calculateHash();
