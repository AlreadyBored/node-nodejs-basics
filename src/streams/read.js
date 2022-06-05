import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    //console.log(filePath)
    const reader = fs.createReadStream(filePath);

    reader.on('data', data => {
        process.stdout.write(data.toString());
    })
};

read();
