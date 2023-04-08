import * as crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
  const pathToData = './src/hash/files/fileToCalculateHashFor.txt';
  fs.readFile(pathToData, {encoding: 'utf8'}, (err, data) => {
    if (err) throw new Error('FS operation failed');
    const result = crypto.createHash('SHA256').update(data).digest('hex');
    console.log(result)
  });
};

await calculateHash();