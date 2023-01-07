import { createHash } from 'node:crypto'
import { fileURLToPath } from "url";
import * as path from "path";
import * as fsp from "fs/promises";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    // Write your code here 
    const fileBuffer = await fsp.readFile(file);
    const hex = createHash('SHA256').update(fileBuffer).digest('hex');
    console.log(hex);
};

await calculateHash();