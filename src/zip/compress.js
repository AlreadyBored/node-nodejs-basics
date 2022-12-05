import zlib from "zlib";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
    let fileToCompressPath = path.resolve(__dirname, "./files", "fileToCompress.txt");

    try{
        await fsPromises.access(fileToCompressPath, fs.constants.R_OK);
    }catch(err){
        throw new Error("fileToCompress.txt does not exists")
    }

    let readableStream = fs.createReadStream(fileToCompressPath);
    let writableStream = fs.createWriteStream(path.resolve(__dirname, "./files", "archive.gz"));
    let zip = zlib.createGzip();

    readableStream.pipe(zip).pipe(writableStream);
};

await compress();