import { fileURLToPath } from "url";
import { dirname } from "path";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  fs.rename(
    path.resolve(__dirname, "files/wrongFilename.txt"),
    path.resolve(__dirname, "files/properFilename.md"),
    function (err) {
      if (err) console.log("ERROR: " + err);
    }
  );
};

rename();
