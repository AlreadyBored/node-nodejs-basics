import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  const path = __dirname + "/files/fresh.txt";

  console.log(path)

  fs.exists(path, (exists) => {
    if (exists) throw new Error("FS operation failed");

    fs.writeFile(path, "I am fresh and young", function () {
      console.log("Saved!");
    });
  });
};
create();
