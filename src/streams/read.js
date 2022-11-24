import * as fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    if (!fs.existsSync(fileToRead)) {
        throw  new Error('FS operation failed');
    }
    const rs = fs.createReadStream(fileToRead);
    rs.on('data', (dataChunk) => {
        process.stdout.write(dataChunk + '\n');
    })
    rs.on('close', () => rs.close());
};

await read();