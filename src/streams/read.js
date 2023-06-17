import { createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';

const directoryPath = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const inp = createReadStream(`${directoryPath}/files/fileToRead.txt`, 'utf-8');

    inp.pipe(process.stdout);
   
};

await read();