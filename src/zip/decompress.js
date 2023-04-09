import zlib from 'zlib'
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const fileName = 'fileToCompress.txt'
const compressedFileName = 'archive.gz'
const folder = 'files'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, folder, fileName)
const compresedFilePath = path.join(__dirname, folder, compressedFileName)

const decompress = async () => {
    const readStream = fs.createReadStream(compresedFilePath)
    const writeStream = fs.createWriteStream(filePath)
    readStream.pipe(zlib.createGunzip()).pipe(writeStream);
};

await decompress();