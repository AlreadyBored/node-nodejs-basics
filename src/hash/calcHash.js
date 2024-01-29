import fs from 'fs'
import path from 'path'
import { createHash } from 'crypto';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const calculateHash = async () => {
  const fileToCalculateHashPath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const readStream = fs.createReadStream(fileToCalculateHashPath)

  const hash = createHash('sha256')

  readStream.pipe(hash)

  readStream.on('end', () => {
    console.log(hash.digest('hex'))
  })
};

await calculateHash();
