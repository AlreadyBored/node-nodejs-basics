import {fileURLToPath} from "node:url";
import path from "node:path";
import fs from "node:fs";

const write = async () => {
    // Write your code here
    const fileName = 'fileToWrite.txt'
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const fullPath = path.join(__dirname, 'files', fileName)
    const writableStream = fs.createWriteStream(fullPath, {encoding: 'utf8'})
    process.stdin.pipe(writableStream)
    writableStream.end()
};

await write();