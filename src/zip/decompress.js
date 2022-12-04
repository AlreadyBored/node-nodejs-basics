import {createReadStream, createWriteStream} from 'node:fs'
import {createUnzip }  from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';


const decompress = async () => {
    const writePath = './src/zip/files/fileToCompress.txt'
    const readPath = './src/zip/files/archive.gz'
    const read = createReadStream(readPath);
    const write = createWriteStream(writePath);
    const unzip = createUnzip();
    const pipe = promisify(pipeline);

    await pipe(read, unzip, write);
};

await decompress();