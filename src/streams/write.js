import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createWriteStream } from "fs";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const file = join(__dirName, "files", "fileToWrite.txt");

const write = async () => {
    const writable = createWriteStream(file);
    const readable = process.stdin;
    readable.on("data", (data) => writable.write(data));
};

await write();
