import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const filePath = path.join(__dirname, 'files', "fileToWrite.txt");
    let stream = fs.createWriteStream(filePath, {encoding: 'utf8'});

    process.stdin.resume();

    process.stdin.on('data', (data) => {
        stream.write(data);
        process.exit();
    })
};

await write();
