import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unzip = zlib.createGunzip();

export const decompress = async () => {
    const fileName = 'fileToCompress';

    const rs = fs.createReadStream(`${__dirname}/files/${fileName}.gz`);
    const ws = fs.createWriteStream(`${__dirname}/files/${fileName}-unzip.txt`);

    rs.pipe(unzip).pipe(ws);
};

decompress()
