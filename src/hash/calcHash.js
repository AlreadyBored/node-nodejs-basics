import { fileURLToPath } from "url";
import { dirname } from "path";
import crypto from 'crypto'
import fs from 'fs'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
    const hash = crypto.createHash('sha256')
    const fileData = fs.readFileSync(__dirname + '/files/fileToCalculateHashFor.txt', 'utf-8')

    hash.update(fileData)

    const hex = hash.digest('hex')
    return hex
};

calculateHash()