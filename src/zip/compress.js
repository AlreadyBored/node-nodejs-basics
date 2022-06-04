import fs from "fs"
import zlib from "zlib"
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCompress =  path.join(__dirname, "/files/", "fileToCompress.txt")
const filePath = path.join(__dirname, "/files/", "archive.gz")

export const compress = async () => {
    const readStream = fs.createReadStream(fileToCompress)
    const writeStream = fs.createWriteStream(filePath)
    const compressFile = zlib.createGzip()

   await readStream.pipe(compressFile).pipe(writeStream)
};
//compress()