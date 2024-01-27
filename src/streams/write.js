import fs from "fs";
import path, {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const writeStream = fs.createWriteStream(path.join(__dirname, "files", "fileToWrite.txt"));

const write = async () => {
    try {
        process.stdin.pipe(writeStream);
    } catch (e) {
        console.log(e);
        throw new Error("FS operation failed");
    }
};

await write();