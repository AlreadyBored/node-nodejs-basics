import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';

const directoryPath = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const inp = createReadStream(`${directoryPath}/files/fileToCompress.txt`);
    const out = createWriteStream(`${directoryPath}/files/archive.gz`);

    const gzip = createGzip();

    inp.pipe(gzip).pipe(out);
    console.log("fileToCompress.txt was compressed");
};

await compress();