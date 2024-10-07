/*
* implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt 
* and logs it into console as hex using Streams API
*/
import { createHash } from 'node:crypto';
import fs from 'node:fs';

const calculateHash = async () => {
    const filePath = "./src/hash/files/fileToCalculateHashFor.txt"
    let content = '';

    fs.readFile(
        filePath,
        "utf8",
        (err, data) => {
            if (err) throw err;
            else content = data;
        }
    );
    const result = createHash('sha256')
        .update(content)
        .digest('hex');

    console.log(result);
};

await calculateHash();