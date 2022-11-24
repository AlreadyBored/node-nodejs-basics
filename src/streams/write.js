import * as fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    if (!fs.existsSync(fileToWrite)) {
        throw  new Error('FS operation failed');
    }
    const ws = fs.createWriteStream(fileToWrite);
    process.stdout.write('Enter some text or q to exit!\n');
    process.stdin.on('data', (data) => {
        const formattedData = data.toString().trim();
        if (formattedData === 'q') {
            process.exit();
        }
        ws.write(`${formattedData}\n`);
    });
};

await write();