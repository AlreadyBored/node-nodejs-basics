import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const read = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    createReadStream(`${__dirname}/files/fileToRead.txt`, 'utf-8').pipe(stdout);
};

await read();