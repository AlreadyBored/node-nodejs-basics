import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    const path = __dirname + "/files/fileToRead.txt";

    fs.exists(path, (exists) => {
        if (!exists) throw new Error("FS operation failed");
    
        fs.readFile(path, 'utf8', function (err, data) {
            console.log(data);
        });
      });

};

read()