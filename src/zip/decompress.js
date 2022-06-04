import fs from "fs"
import zlib from "zlib"
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToDecompress = path.join(__dirname, "/files/", "archive.gz")
const filePath = path.join(__dirname, "/files/", "fileToCompress.txt")

export const decompress = async () => {
    const readStream = fs.createReadStream(fileToDecompress)
    const writeStream = fs.createWriteStream(filePath)
    const decompressFile = zlib.createUnzip()

    await readStream.pipe(decompressFile).pipe(writeStream)
};
//decompress()