import { createWriteStream } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';

const directoryPath = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const writeStream = createWriteStream(`${directoryPath}/files/fileToWrite.txt`);

    process.stdin.pipe(writeStream);
};

await write();