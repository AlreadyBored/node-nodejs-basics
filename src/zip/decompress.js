import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    var FromZip = zlib.createGunzip();
    var ReadStream = fs.createReadStream("./src/zip/files/archive.gz");
    var WriteStream = fs.createWriteStream("./src/zip/files/fileToCompress.txt");

    ReadStream.pipe(FromZip).pipe(WriteStream);
};

await decompress();
