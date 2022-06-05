import fs from 'fs';
import { Transform } from "stream";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const transform = async () => {
    const rs = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);
    const ws = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);

    const revert = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });

    rs.pipe(revert).pipe(ws);
};

transform();
