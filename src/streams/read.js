import fs from 'fs';
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { stdout } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const stream = fs.createReadStream(path.resolve(__dirname, 'files/fileToRead.txt'), 'utf-8');

    stream.pipe(stdout);
};

await read();