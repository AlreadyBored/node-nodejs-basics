import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
    const path = __dirname + "/files/fileToRemove.txt";

    fs.exists(path, (exists) => {
        if (!exists) throw new Error("FS operation failed");
    
        fs.unlink(path, function () {
          console.log("Delete!");
        });
      });
    
};

remove()