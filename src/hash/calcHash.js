import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.resolve(__dirname, './files/fileToCalculateHashFor.txt');

  const fileContent = await new Promise((resolve) => {
    let data = '';

    const stream = fs.createReadStream(filePath, {encoding: 'utf8'});

    stream.on('data', part => {
      data += part.toString();
    });

    stream.on('close', () => {
      resolve(data);
    });
  });

  const hash = createHash('sha256');
  hash.update(fileContent);
  const hashedValue = hash.digest('hex');

  console.log(hashedValue);
};

await calculateHash();
