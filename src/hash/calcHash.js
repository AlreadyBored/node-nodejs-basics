import { isFileExist } from "../utils/utils.js";
import path from "path";
import fs from "fs";
import * as url from "url";
import { createHash } from "crypto";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
  const fileName = path.join(__dirname, "files/fileToCalculateHashFor.txt");
  isFileExist(fileName);
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) throw "Can not read the file";
    if (data) {
      const hash = createHash("sha256").update(data).digest("hex");
      console.log(hash);
    }
  });
};

await calculateHash();
