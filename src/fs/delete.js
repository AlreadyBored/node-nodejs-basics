import { fileURLToPath } from "url";
import { dirname } from "path";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
  fs.unlinkSync(
    path.resolve(__dirname, "files/fileToRemove.txt"),
    function (err) {
      if (err) console.log("ERROR: " + err);
    }
  );
};

remove();
