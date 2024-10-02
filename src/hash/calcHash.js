import path from 'path';
import fs from 'fs/promises';
import { createHash } from 'crypto';

const filePath = path.resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const fileUrl = new URL(filePath, import.meta.url);

  const fileData = await fs.readFile(fileUrl);
  const hashData = createHash('sha256').update(fileData);

  console.log(hashData.digest('hex'));
};

await calculateHash();
