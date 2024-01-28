import {  createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, 'files');
const fileToRead = path.join(filesFolder ,"fileToRead.txt")

const read = async () => {
const readableStream = createReadStream(fileToRead);
readableStream.pipe(process.stdout);
};

await read();
