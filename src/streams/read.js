import { createReadStream } from "fs";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
import { stdout } from "process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const readStream = createReadStream(path.join(__dirname, "files", "fileToRead.txt"));

const read = async () => {
    try {
        readStream.pipe(stdout);
    } catch {
        throw new Error("FS operation failed");
    }
};

await read();