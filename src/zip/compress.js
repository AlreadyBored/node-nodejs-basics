import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

 const compress = async () => {
    const gzip = createGzip();
    const input = createReadStream('./files/fileToCompress.txt');
    const output = createWriteStream('./files/compress.gz');

    input.pipe(gzip).pipe(output);
};

export default compress();