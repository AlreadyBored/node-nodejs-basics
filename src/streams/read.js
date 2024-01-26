import fs from "fs";
import * as url from 'url';
import path from "path";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const readableStream = fs.createReadStream(pathToFile);

const read = async () => {
    readableStream.on("data", (chunk) => process.stdout.write(chunk))
};

await read();