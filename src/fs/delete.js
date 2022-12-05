import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = __dirname + "/files/fileToRemove.txt";
const errorMessage = "FS operation failed";

const remove = async () => {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
    } else {
        throw new Error(errorMessage);
    }
};

await remove();