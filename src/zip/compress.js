import zlib from 'zlib';
import fs from 'fs';    

const compress = async () => {
    // Write your code here
    const inputFile = fs.createReadStream('files/fileToCompress.txt');  
    const outputFile = fs.createWriteStream('files/fileToCompress.txt.gz');  
    
    inputFile.pipe(zlib.createGzip()).pipe(outputFile);
};

await compress();