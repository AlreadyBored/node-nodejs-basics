import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const oldName = __dirname + "/files/wrongFilename.txt";
const newName = __dirname + "/files/properFilename.md";
const errorMessage = "FS operation failed";

const rename = async () => {
    if (fs.existsSync(oldName)) {
        fs.renameSync(oldName, newName);
    } else {
        throw new Error(errorMessage);
    }
};

await rename();