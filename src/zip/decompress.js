import zlib from "zlib";
import fs from "fs";
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__filename);
const fileToWritePath = path.join(__dirName, "files", "fileToCompress.txt");
const fileToReadPath = path.join(__dirName, "files", "archive.gz");

const decompress = async () => {
    // Write your code here
    const zip = zlib.createUnzip();
    const readStreamFS = fs.createReadStream(fileToReadPath);
    const writableStreamFS = fs.createWriteStream(fileToWritePath);
    readStreamFS.pipe(zip).pipe(writableStreamFS);
};

await decompress();