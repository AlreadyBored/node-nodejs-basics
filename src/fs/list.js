import { fileURLToPath } from "url";
import { dirname } from "path";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  let names = [];
  await fs.readdir(path.resolve(__dirname, "files"), (err, files) => {
    if (err) {
      throw new Error("FS operation is failed");
    } else {
      console.log(files);
    }
  });
};

list();
