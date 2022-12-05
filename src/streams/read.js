import { createReadStream } from "node:fs";

const read = async () => {
    const filePath = new URL('files/fileToRead.txt', import.meta.url);
    const readStream = createReadStream(filePath);
    readStream.pipe(process.stdout);
};

await read();