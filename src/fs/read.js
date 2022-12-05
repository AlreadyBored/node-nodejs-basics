import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = __dirname + "/files/fileToRead.txt";
const errorMessage = "FS operation failed";

const read = async () => {
    fs.readFile(file, "utf-8", (error, data) => {
        if (error) {
            throw new Error(errorMessage);
        } else {
            console.log(data.toString());
        }
    });
};

await read();