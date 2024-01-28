import { createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const fileToWrite = join(__dirname, "files", "fileToWrite.txt");
    const writableStream = createWriteStream(fileToWrite);

    process.stdin.pipe(writableStream);
};

await write();