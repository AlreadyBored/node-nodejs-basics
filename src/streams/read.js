import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";
import { Readable } from "stream";

const __filename = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__filename);
const filesPath = path.join(__dirName, "files");
const [fileToRead] = await fs.promises.readdir(filesPath);
const fileToReadPath = path.join(__dirName, "files", fileToRead);
const read = async () => {
    // Write your code here

    /*FS*/
    // const readStreamFS = fs.createReadStream(fileToReadPath, 'utf-8');
    // readStreamFS.pipe(process.stdout)

    /*Stream*/
    const readStream = new Readable({
        encoding: 'utf-8'
    })
    readStream._read = ( ) => { }
    readStream.push(await fs.promises.readFile(fileToReadPath));
    readStream.pipe(process.stdout);
};

await read();