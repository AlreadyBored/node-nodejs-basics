import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';


const archive = './files/archive.gz';
const decompressedFile = './files/fileToCompress.txt';

const decompress = async (arch, decom) => {

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const absoluteInitialFilePath = path.join(__dirname, arch);
    const absoluteFinalFilePath = path.join(__dirname, decom);

    const readStream = fs.createReadStream(absoluteInitialFilePath);
    const writeStream = fs.createWriteStream(absoluteFinalFilePath);
    const gunzipStream = zlib.createGunzip();

    try {
        await pipeline(readStream, gunzipStream, writeStream);
    } catch (err) {
        console.error(err.message);
    }
};

await decompress(archive, decompressedFile);