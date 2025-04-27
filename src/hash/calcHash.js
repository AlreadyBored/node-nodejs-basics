import crypto from 'crypto';
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToReadPath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
    
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(fileToReadPath);
    stream.on('data', (chunk) => {
        hash.update(chunk);
    });
    stream.on('end', () => {
        console.log(hash.digest('hex'));
    });
};
await calculateHash();