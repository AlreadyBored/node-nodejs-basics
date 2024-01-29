import fs from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_NAME = 'fileToCompress.txt';
const DIR = "files";
const ARCHIVE_NAME = 'archive.gz';

const decompress = async () => {
    const inputFilePath = path.join(__dirname,ARCHIVE_NAME);
    const outputFilePath = path.join(__dirname, DIR, FILE_NAME);

    await fs.access(inputFilePath);

    const readStream = createReadStream(inputFilePath);
    const writeStream = createWriteStream(outputFilePath);
    const gunZip = createGunzip();

    await pipeline(readStream, gunZip, writeStream);
};

await decompress();
