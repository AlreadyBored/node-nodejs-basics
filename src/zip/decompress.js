import {createUnzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const decompress = async () => {
    const unzipFile = createUnzip();
    const read = createReadStream(__dirname + '/files/archive.gz');
    const write = createWriteStream(__dirname + '/files/fileToDecompress.txt');
    read.pipe(unzipFile).pipe(write);
};

decompress()