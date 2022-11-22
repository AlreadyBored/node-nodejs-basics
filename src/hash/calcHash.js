import crypto from 'crypto';
import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, "files");
const targetFilePath = path.join(folderPath, "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    if (!fs.existsSync(targetFilePath) || !fs.lstatSync(targetFilePath).isFile()) {
        throw new Error('FS operation failed');
    }
    const fd = await fsPromises.open(targetFilePath);
    const rs = fd.createReadStream();
    const hashSum = crypto.createHash('sha256');
    rs.on('data', (dataChunk) => {
        hashSum.update(dataChunk);
    })
    rs.on('close', () => {
        fd.close();
        const hex = hashSum.digest('hex');
        console.log(hex);
    })
    
};

await calculateHash();