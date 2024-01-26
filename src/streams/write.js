import fs from "fs";
import * as url from 'url';
import path from "path";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");

const writableStream = fs.createWriteStream(pathToFile);

const write = async () => {
    process.stdin.pipe(writableStream);
};

await write();


