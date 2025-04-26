import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//define files
const filePathToUnzip=path.join(path.join(__dirname, 'files'), 'archive.gz');
const filePathUnzipped=path.join(path.join(__dirname, 'files'), 'fileToCompress.txt');

const decompress = async () => {
    var gzip=zlib.createUnzip()
    const rS=fs.createReadStream(filePathToUnzip)
    const wZ=fs.createWriteStream(filePathUnzipped);
    rS.pipe(gzip).pipe(wZ);
};

await decompress();