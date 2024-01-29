import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt")

    const fileHash = await new Promise((resolve, reject) => {
        const hash = crypto.createHash("SHA256");
        const stream = fs.createReadStream(filePath);
        stream.on('data', data => hash.update(data));
        stream.on('end', () => {
            const hexHash = hash.digest('hex');
            resolve(hexHash);
        });
        stream.on('error', error => reject(error));
    });

    console.log(fileHash)
};

await calculateHash();
