import {createGzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const compress = async () => {
    const gzip = createGzip()
    const read = createReadStream(__dirname+'/files/fileToCompress.txt')
    const write = createWriteStream(__dirname + '/files/archive.gz');
    read.pipe(gzip).pipe(write);
};

compress()