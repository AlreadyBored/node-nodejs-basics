import {Writable} from "stream";
import fs from "fs";
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__filename);
const filesPath = path.join(__dirName, "files");
const [,fileToWrite] = await fs.promises.readdir(filesPath);
const fileToWritePath = path.join(__dirName, "files", fileToWrite);
const write = async () => {
    // Write your code here

    /*FS*/
    // const writableStreamFS = fs.createWriteStream(fileToWritePath);
    // process.stdin.pipe(writableStreamFS);

    /*Stream*/
    const writableStream = new Writable({
        encoding: 'utf-8'
    })
    writableStream._write = async (chunk) => {
       await fs.promises.writeFile(fileToWritePath, chunk.toString());
        process.exit();
    }
    process.stdin.pipe(writableStream);
};

await write();