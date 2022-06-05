import { writeFile, stat } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = __dirname + "/files/fresh.txt";
  stat(path, (err, _) => {
    if (err) {
      writeFile(path, "I am fresh and young", (err) => {
        if (err) throw new Error("FS operation failed");
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

create();
