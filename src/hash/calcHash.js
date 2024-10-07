import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
const __dirname = import.meta.dirname
let FilePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const rs = fs.createReadStream(FilePath);
    rs.on('data', chunk => hash.update(chunk));
    rs.on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();