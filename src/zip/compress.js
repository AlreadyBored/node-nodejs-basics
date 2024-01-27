import fs from "fs";
import path from "path";
import * as url from 'url';
import zlib from "node:zlib";
import { pipeline } from "stream";
    
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const srcPath = path.join(__dirname, "files", "fileToCompress.txt");
const destPath = path.join(__dirname, "files", "archive.gz"); 

const zip = zlib.createGzip();
const readableStream = fs.createReadStream(srcPath);
const writableStream = fs.createWriteStream(destPath);

const compress = async () => {
    readableStream.pipe(zip).pipe(writableStream);
};

await compress();