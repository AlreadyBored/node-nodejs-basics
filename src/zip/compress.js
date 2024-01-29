import fs from 'fs';
import zlib from 'zlib';
import {fileURLToPath} from "url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const filePath = path.join(__dirname,'files','pipiska.txt')
    const compressedFilePath = path.join(__dirname,'files','archive.gz')

    const readStream = fs.createReadStream(filePath,{encoding:'utf-8'})
    const writeStream = fs.createWriteStream(compressedFilePath)
    const gzipStream = zlib.createGzip()

    readStream.pipe(gzipStream).pipe(writeStream)

    writeStream.on('finish', ()=> {
        console.log('file was compressed')
    })
    writeStream.on('error', (err) => {
        console.error(err.message)
    })
};

await compress();
