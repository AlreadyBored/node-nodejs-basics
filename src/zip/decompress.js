import { pipeline as streamPipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'node:url';
import { createReadStream as fsCreateReadStream, createWriteStream as fsCreateWriteStream  } from 'fs';
import { join as pathJoin, dirname as pathDirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const fileName = 'fileToCompress.txt';
const filePath = 'files';
const fileFullPath = pathJoin(__dirname, filePath , fileName);
const archiveName = 'archive.gz';
const archiveFullPath = pathJoin(__dirname, filePath , archiveName);

const decompress = async () => {
    await streamPipeline( fsCreateReadStream(archiveFullPath), createGunzip(), fsCreateWriteStream(fileFullPath) );
}

await decompress();
