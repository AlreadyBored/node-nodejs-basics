import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { stdout } from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(path.join(__dirname, 'files'), 'fileToCalculateHashFor.txt');
const calculateHash = async () => {
     var rS=fs.createReadStream(filePath);
     var hash=crypto.createHash('sha256');
     rS.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();