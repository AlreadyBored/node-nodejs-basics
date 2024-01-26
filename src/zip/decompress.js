import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);

const src = createReadStream(currentDir + '/files/archive.gz');
const dst = createWriteStream(currentDir + '/files/fileToCompress.txt');

const decompress = async () => {
    
    src.pipe(createGunzip()).pipe(dst)

};

await decompress();