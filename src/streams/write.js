import path from "path";
import fs from "fs";
import process from "process";
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
    let filePath = path.resolve(__dirname, "./files", "fileToWrite.txt");
    let writableStream = fs.createWriteStream(filePath);

    process.stdin.on("data", data => writableStream.write(data));
};

await write();