import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createReadStream } from "fs";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const file = join(__dirName, "files", "fileToRead.txt");

const read = async () => {
    const readable = createReadStream(file, "utf-8");
    readable.pipe(process.stdout);
};

await read();
