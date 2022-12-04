import path from 'path';
import { fileURLToPath } from 'url';

import { createReadStream, createWriteStream } from "fs";
import { createGzip } from 'zlib';


// fileToCompress.txt -> archive.gz
// using zlib and Streams API
const compress = async () => {
    const currentPath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = currentPath + '/files/fileToCompress.txt';
    const archivePath = currentPath + `/files/archive.gz`;

    const handleStream = createReadStream(filePath);
    handleStream
        .pipe(createGzip())
        .pipe(createWriteStream(archivePath));
};

await compress();