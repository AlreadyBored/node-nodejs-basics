import { access, constants, writeFile } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  const file = "fresh.txt";
  const message = "I am fresh and young";
  access(__dirname + "/files/" + file, constants.F_OK, (error) => {
    if (error) {
      writeFile(__dirname + "/files/" + file, message, "utf8", (err) => {
        if (err) throw err;
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

create();
