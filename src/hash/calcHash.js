import crypto from 'crypto';
import fs from "fs";
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const calculateHash = async () => {
  const inputPath = `${__dirname}files/fileToCalculateHashFor.txt`;
  const receiveData = fs.readFileSync(inputPath, 'utf8');
  const hash = crypto.createHash('sha256');
  let hexCode;

  hash.on('readable', () => {
    const data = hash.read();
    if (data) {
      hexCode = data.toString('hex');
    }
  });

  hash.write(receiveData);
  hash.end();
  console.log(hexCode);
  return hexCode;
};

calculateHash();
