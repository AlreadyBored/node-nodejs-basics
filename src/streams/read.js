import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', "fileToRead.txt");
    let stream = fs.createReadStream(filePath, {encoding: 'utf8'});

    stream.on('data', data => process.stdout.write(data));
};

await read();
