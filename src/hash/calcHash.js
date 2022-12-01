import fs from "fs";
import path from "path";
import { createHash } from 'crypto'

const calculateHash = async () => {
    // Write your code here
    // calcHash.js - implement function that calculates SHA256 hash for file
    // fileToCalculateHashFor.txt and logs it into console as hex

    const file = path.resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt')
    const data = fs.promises.readFile(file, 'utf-8')

    const hash = createHash('sha256').update(data.toString()).digest('hex')
    console.log(hash)
};

await calculateHash();