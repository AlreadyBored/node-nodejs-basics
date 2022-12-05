import { createGunzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';
import { resolve } from 'node:path';

const decompress = async () => {
    const absoluteFilePath = await resolve('files', 'archive.gz');
    const stream = createReadStream(absoluteFilePath);
    stream
        .pipe(createGunzip())
        .pipe(createWriteStream('./files/fileToCompress.txt'))
        .on("finish", () =>
            console.log(`Successfully decompressed the file`)
        );
};

await decompress();