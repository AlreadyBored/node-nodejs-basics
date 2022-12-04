import zlib from "zlib";
import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__filename);
const fileToReadPath = path.join(__dirName, "files", "fileToCompress.txt");
const fileToWritePath = path.join(__dirName, "files", "archive.gz");
const compress = async () => {
    // Write your code here
    const zip = zlib.createGzip();
    const readStreamFS = fs.createReadStream(fileToReadPath);
    const writableStreamFS = fs.createWriteStream(fileToWritePath);
    readStreamFS.pipe(zip).pipe(writableStreamFS);
};

await compress();