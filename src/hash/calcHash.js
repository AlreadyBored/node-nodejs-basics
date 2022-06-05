import * as crypto from "crypto";
import * as fs from 'fs/promises';

export const calculateHash = async () => {
    const file = await fs.readFile("./src/hash/files/fileToCalculateHashFor.txt");
    return crypto.createHash('sha256').update(file).digest('hex');
};

console.log(await calculateHash())