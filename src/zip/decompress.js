import fs from 'fs'
import zlib from 'zlib'
export const decompress = async () => {
    let readableStream = fs.createReadStream("./files/archive.gz");

    let writeableStream = fs.createWriteStream("./files/fileToCompress.txt");
  
    let gzip = zlib.Gunzip();
  
    readableStream.pipe(gzip).pipe(writeableStream);
};
decompress()