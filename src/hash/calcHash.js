import crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
    const dir = 'src/hash/files/'
    const targetFile = 'fileToCalculateHashFor.txt'
    const fileBuffer = fs.readFileSync(dir + targetFile);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
    console.log('hex',hex)
};

await calculateHash();
