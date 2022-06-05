import crypto from "crypto";
import path from "path";
import fs from "fs/promises";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const data = await fs.readFile(filePath);
    const hash = crypto.createHash('sha256').update(data).digest('hex');

    console.log("\x1b[32m", hash, '\x1b[0m');

    return hash;

};

calculateHash();
