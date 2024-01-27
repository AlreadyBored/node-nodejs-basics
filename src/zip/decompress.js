import fs from "fs";
import path from "path";
import * as url from 'url';
import zlib from "node:zlib";
    
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const srcPath = path.join(__dirname, "files", "archive.gz");
const destPath = path.join(__dirname, "files", "fileToCompress.txt"); 

const unzip = zlib.createUnzip();
const readableStream = fs.createReadStream(srcPath);
const writableStream = fs.createWriteStream(destPath);


const decompress = async () => {
    readableStream.pipe(unzip).pipe(writableStream);
};

await decompress();
