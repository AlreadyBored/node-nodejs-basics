import fs from 'fs';
import zlib from 'zlib';

const path = "./src/zip/files/fileToCompress.txt";

const compress = async () => {
    var ToZip = zlib.createGzip();
    var ReadStream = fs.createReadStream(path);
    var WriteStream = fs.createWriteStream("./src/zip/files/archive.gz");

    ReadStream.pipe(ToZip).pipe(WriteStream).on("finish", function() {
        console.log("done compressing!!!");
        fs.unlinkSync(path);
    });
};

await compress();
