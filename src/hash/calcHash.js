import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { ReadStream } from 'fs';
import { pipeline } from 'stream'
const dirName = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(dirName, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const rs = ReadStream(sourcePath);
    rs.on('data', (data) => hash.update(data));
    rs.on('end', () => { 
      let hashValue = hash.digest('hex');
      console.log(hashValue);
      resolve(hashValue);
    });
    rs.on('error', (err) => { reject(err); throw err; });
  })
};

await calculateHash();