import { Readable } from "stream";
import { createReadStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const fileToRead = join(__dirname, "files", "fileToRead.txt");
    const fileStream = createReadStream(fileToRead);

    const readable = new Readable();
    readable._read = () => {};

    fileStream.on("data", (chunk) => {
        readable.push(chunk);
    });
    fileStream.on("end", () => {
        readable.push(null);
    });

    readable.pipe(process.stdout);
};

await read();
