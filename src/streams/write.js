import { createWriteStream as fsCreateWriteStream } from 'fs';
import { pipeline as streamPipeline } from 'stream/promises';
import { fileURLToPath } from 'node:url';
import { join as pathJoin, dirname as pathDirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const fileName = 'fileToWrite.txt';
const filePath = 'files';
const fileFullPath = pathJoin(__dirname, filePath, fileName);

const write = async () => {
    const writableStream = fsCreateWriteStream(fileFullPath);
    await streamPipeline(process.stdin, writableStream);
}

await write();