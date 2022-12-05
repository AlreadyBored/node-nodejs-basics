import path from "path";
import fs from "fs";
import process from "process";
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    let filePath = path.resolve(__dirname, "./files", "fileToRead.txt");
    let readableStream = fs.createReadStream(filePath);
    let fileData = "";

    readableStream.on("data", chunk => fileData += chunk);
    readableStream.on("end", () => process.stdout.write(fileData));
};

await read();