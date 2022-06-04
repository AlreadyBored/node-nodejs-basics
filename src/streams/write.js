import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWrite =  path.join(__dirname, "/files/", "fileToWrite.txt")


export const write = async () => {
    const writess = await fs.createWriteStream(fileToWrite)
    await process.stdin.pipe(writess);

};
//write()