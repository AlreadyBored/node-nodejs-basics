import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';


const read = async () => {
    const currentPath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = currentPath + '/files/fileToRead.txt';

    const readable = fs.createReadStream(filePath);

    readable.on('readable', () => {
        let chunk;
        while (null !== (chunk = readable.read())) {
            process.stdout.write(chunk);
        }
    });
};

await read();