import { createWriteStream } from "node:fs";

const write = async () => {
    const filePath    = new URL('files/fileToWrite.txt', import.meta.url);
    const writeStream = createWriteStream(filePath);
    process.stdin.pipe(writeStream)
};

await write();