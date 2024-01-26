import * as fsp from "fs/promises";
import * as fs from 'fs'
import * as path from "path";
import crypto from 'crypto';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)

const calculateHash = async () => {
    const fileHash = path.join(__dirname, "files/fileToCalculateHashFor.txt");
    const fileData = fs.readFileSync(fileHash);
    const hash = crypto.createHash('sha256');
    hash.update(fileData);
    const hexHash = hash.digest('hex');
    console.log(`SHA256 hash of ${path.basename(fileHash)}: ${hexHash}`);
};

await calculateHash();




