import { fileURLToPath } from "url";
import { dirname } from "path";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  fs.writeFile(
    path.join(__dirname, "files", "fresh.txt"),
    "I am fresh and young",
    (err) => {
      if (err) throw err;
      console.log("Файл был создан");
    }
  );
};

create();
