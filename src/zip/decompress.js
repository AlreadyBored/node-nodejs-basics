import zlib from 'zlib';
import fs from 'fs'

export const decompress = async () => {
    const unzip = zlib.createUnzip(); 
    const inp = fs.createReadStream('src/zip/files/archive.gz');  
    const out = fs.createWriteStream('src/zip/files/fileToCompress.txt');  
    inp.pipe(unzip).pipe(out);    
};

decompress()

