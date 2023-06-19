import zlib from 'node:zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    const __dirname = `${dirname(fileURLToPath(import.meta.url))}/files`;
    
    const unZib = zlib.createUnzip()
    const unZipFile = createReadStream(`${__dirname}/archive.gz`);
    const targetFile = createWriteStream(`${__dirname}/fileToCompress.txt`);
    
    unZipFile.pipe(unZib).pipe(targetFile)
};

await decompress();