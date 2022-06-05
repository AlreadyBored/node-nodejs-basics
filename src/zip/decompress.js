import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";

 const decompress = async () => {
     const gzip = createUnzip();
     const input = createReadStream('./files/compress.gz');
     const output = createWriteStream('./files/decompress.txt');

     input.pipe(gzip).pipe(output);
};
export default decompress();