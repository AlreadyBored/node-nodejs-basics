import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const write = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');
    const stream = createWriteStream(filePath);
    process.stdin.pipe(stream);
};

await write();
