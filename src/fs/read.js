import { fileURLToPath } from "url";
import { dirname } from "path";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  await fs.readFile(
    path.resolve(__dirname, "files/fileToRead.txt"),
    (error, data) => {
      if (error) {
        throw new Error("FS operation is failed");
      }
      console.log(data.toString());
    }
  );
};

read();
