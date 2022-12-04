import path from 'path';
import { fileURLToPath } from 'url';

import { createReadStream, createWriteStream } from "fs";
import { createGunzip, createGzip } from 'zlib';


// archive.gz -> fileToCompress.txt
// using zlib and Streams API
const decompress = async () => {
    const currentPath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = currentPath + '/files/fileToCompress.txt';
    const archivePath = currentPath + `/files/archive.gz`;

    createReadStream(archivePath)
        .pipe(createGunzip())
        .pipe(createWriteStream(filePath));
};

await decompress();