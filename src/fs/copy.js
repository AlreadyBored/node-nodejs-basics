import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const copyFrom = __dirname + "/files/";
const copyTo = __dirname + "/files_copy/";
const errorMessage = "FS operation failed";

const copy = async () => {
    try {
        fs.cpSync(copyFrom, copyTo, {
            recursive: true,
            force: false,
            errorOnExist: true,
        });
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await copy();
