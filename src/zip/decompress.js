import zlib from 'zlib'
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
    const unzip = zlib.createUnzip();
    const inp = fs.createReadStream(__dirname + '/files/archive.gz')
    const out = fs.createWriteStream(__dirname + '/files/fileToCompress.txt')
    inp.pipe(unzip).pipe(out);

};

decompress()