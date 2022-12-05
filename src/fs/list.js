import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path = __dirname + "/files/";
const errorMessage = "FS operation failed";

const list = async () => {
    fs.readdir(path, (error, files) => {
        if (error) {
            throw new Error(errorMessage);
        } else {
            console.log(files);
        }
    });
};

await list();