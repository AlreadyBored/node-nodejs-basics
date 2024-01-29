import { createHash } from "crypto";
import * as fs from 'fs';


const calculateHash = async () => {
    const hash = createHash("sha256");
    const readStream = fs.createReadStream('src/hash/files/fileToCalculateHashFor.txt');
    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });
    readStream.on('end', () => {
        console.log(hash.digest("hex"));
    })

};

await calculateHash();