import {  createReadStream } from "fs";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils";

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const readStream = createReadStream(pathToFile );

const read = async () => {
    readStream.pipe(process.stdout);
};

await read();