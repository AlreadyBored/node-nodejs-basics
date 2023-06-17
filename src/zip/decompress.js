import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";
import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';

const directoryPath = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const inp = createReadStream(`${directoryPath}/files/archive.gz`);
    const out = createWriteStream(`${directoryPath}/files/fileToCompress.txt`);

    const gzip = createUnzip();

    inp.pipe(gzip).pipe(out);
    console.log("archive.gz was decompressed!");
};

await decompress();