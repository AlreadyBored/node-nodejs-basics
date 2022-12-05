import zlib from "zlib";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
    let archivePath = path.resolve(__dirname, "./files", "archive.gz");
    
    try{
        await fsPromises.access(archivePath, fs.constants.R_OK);
    }catch(err){
        throw new Error("archive.gz does not exists")
    }

    let readableStream = fs.createReadStream(archivePath);
    let writableStream = fs.createWriteStream(path.resolve(__dirname, "./files", "fileToCompress.txt"));
    let unzip = zlib.createUnzip();

    readableStream.pipe(unzip).pipe(writableStream);
};

await decompress();