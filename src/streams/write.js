import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const writebleStream = fs.createWriteStream(path.join(__dirname, 'files/fileToWrite.txt'), 'utf-8');
    process.stdin.on('data', chunk => writebleStream.write(chunk));
};

await write();