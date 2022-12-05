import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
    // Write your code here
    const inputFile = fs.createReadStream('files/fileToCompress.txt.gz');  
    const outputFile = fs.createWriteStream('files/fileToCompress.txt');  
    
    inputFile.pipe(zlib.createUnzip()).pipe(outputFile);
};

await decompress();