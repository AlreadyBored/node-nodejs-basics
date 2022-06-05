import zlib from 'zlib'
import {pipeline } from 'stream'
import {
    createReadStream,
    createWriteStream
  } from 'fs'
export const decompress = async () => {
    const unzip = zlib.createUnzip(); 
    const inp = createReadStream('files/archive.gz');   
    const out = createWriteStream('files/fileToCompress.txt');     
    inp.pipe(unzip).pipe(out);   
};

decompress()