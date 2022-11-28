import {fileURLToPath} from "node:url";
import path from "node:path";
import fs from "node:fs/promises";
import * as crypto from "node:crypto";

const calculateHash = async () => {
    // Write your code here
    const fileName = 'fileToCalculateHashFor.txt'
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const fullPath = path.join(__dirname, 'files', fileName)

    const fileBuffer = await  fs.readFile(fullPath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    console.log(hex);
};

await calculateHash();