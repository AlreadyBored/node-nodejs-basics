import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_PATH = path.join(__dirname, 'files', 'fileToWrite.txt')

const write = async () => {
    const output = createWriteStream(FILE_PATH);
    process.stdin.on('data', data => {
        output.write(`You typed ${data.toString()}`);
        process.exit();
    });
};

await write();