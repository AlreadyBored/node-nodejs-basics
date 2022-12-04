import { createHash } from 'node:crypto'
import {fileURLToPath} from "url";
import path from "path";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__filename);
const filesPath = path.join(__dirName, "files");
const [fileName] = await fs.readdir(filesPath);
const fileToCalcPath = path.join(__dirName, "files", fileName);

console.log()
const calculateHash = async () => {
    // Write your code here
    const hex = sha256(fileToCalcPath)
    console.log(hex)
};

const sha256 = (content) => {
    return createHash('sha3-256').update(content).digest('hex')
}

await calculateHash();