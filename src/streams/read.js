import { createReadStream as fsCreateReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'node:url';
import { join as pathJoin, dirname as pathDirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const fileName = 'fileToRead.txt';
const filePath = 'files';
const fileFullPath = pathJoin(__dirname, filePath , fileName);

const read = async () => {
    await pipeline(fsCreateReadStream(fileFullPath), process.stdout);
};

await read();
