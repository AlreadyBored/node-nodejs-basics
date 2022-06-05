import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { exit, stdin, stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    
    stdout.write('Enter text\n');

    const writeData = fs.createWriteStream(filePath);
    stdin.pipe(writeData);
    stdin.resume();
};

write();
