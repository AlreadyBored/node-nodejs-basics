import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gzip = zlib.createGzip();

export const compress = async () => {
    const fileName = 'fileToCompress';

    const rs = fs.createReadStream(`${__dirname}/files/${fileName}.txt`);
    const ws = fs.createWriteStream(`${__dirname}/files/${fileName}.gz`);

    rs.pipe(gzip).pipe(ws);
};

compress()
