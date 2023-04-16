import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = __dirname + "/files/fresh.txt";
const content = "I am fresh and young";
const errMessage = "FS operation failed";

const create = async () => {
    if (fs.existsSync(filePath)) {
        throw new Error(errMessage);
    } else {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                throw new Error(errMessage);
            }
        });
    }
};

await create();
