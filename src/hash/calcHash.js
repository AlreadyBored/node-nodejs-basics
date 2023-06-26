import fsPromises from "node:fs/promises";
import crypto from 'node:crypto';

const calculateHash = async () => {
  const filepath = './src/hash/files/fileToCalculateHashFor.txt';
  const content = await fsPromises.readFile(filepath, { encoding: 'utf8' });

  console.log(crypto.createHash('sha256').update(content).digest('hex'));
};

await calculateHash();
