import fs from 'node:fs'
import crypto from "crypto";

const calculateHash = async () => {
  const hash = crypto.createHash('sha256')
  const input = fs.createReadStream('./files/fileToCalculateHashFor.txt');

  input.pipe(hash).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();