import fs from 'fs';
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { stdin } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const writeStream = fs.createWriteStream(path.resolve(__dirname, 'files/fileToWrite.txt'), 'utf-8');

    stdin.pipe(writeStream);
};

await write();