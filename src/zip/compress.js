import zlib from 'zlib'
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
    const gzip = zlib.createGzip();
    const r = fs.createReadStream(__dirname + '/files/fileToCompress.txt');
    const w = fs.createWriteStream(__dirname + '/files/archive.gz');
    r.pipe(gzip).pipe(w);
};

compress()