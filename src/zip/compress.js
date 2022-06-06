import * as fs from 'fs';
import * as zlib from 'zlib';
export const compress = async () => {
    const glib = zlib.createGzip()
    const readStream = fs.createReadStream('./zip/files/fileToCompress.txt' )
    const writeStream = fs.createWriteStream('./zip/files/archive.txt.gz' );
    readStream.pipe(glib).pipe(writeStream);
};

compress()