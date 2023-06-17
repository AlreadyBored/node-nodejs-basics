import { readFile } from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';

const directoryPath = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const errorMessage = 'FS operation failed';

    try {
        const contents = await readFile(`${directoryPath}/files/fileToRead.txt`, { encoding: 'utf8' });
        console.log(contents);

    } catch (error) {
        throw new Error(errorMessage);
    }
};

await read();