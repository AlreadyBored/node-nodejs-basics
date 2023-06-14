import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import url from 'url'

const calculateHash = async () => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    fs.createReadStream(file).
      pipe(crypto.createHash('sha256').setEncoding('hex')).
      on('finish', function() {
        console.log(this.read())
      })
};

await calculateHash();