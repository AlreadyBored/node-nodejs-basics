import fs from 'fs';
import { createUnzip } from 'zlib';

export const decompress = async () => {
    const unzip = createUnzip();
    const inp = fs.createReadStream('src/zip/archive.gz');
    const out = fs.createWriteStream('src/zip/fileToCompress.txt');
    inp.pipe(unzip).pipe(out);
};

decompress();
