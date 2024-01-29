import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILES_PATH = 'files';
const COMPRESS_FILE = 'fileToCompress.txt';
const ARCHIVE_FILE = 'archive.gz'
const compressFilePath = path.join(__dirname, FILES_PATH, COMPRESS_FILE)
const archiveFilePath = path.join(__dirname, FILES_PATH, ARCHIVE_FILE)

const compressFile = (inputPath, outputPath) => {
    const readStream = fs.createReadStream(inputPath)
    const gunzipStream = zlib.createGunzip()
    const writeStream = fs.createWriteStream(outputPath)

    readStream.pipe(gunzipStream).pipe(writeStream)
}

const decompress = async () => {
    compressFile(archiveFilePath, compressFilePath)
};

await decompress();