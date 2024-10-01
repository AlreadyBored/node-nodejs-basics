import { getFilesFolderPath } from "../utils.js";
import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
  const fileName = 'fileToCalculateHashFor.txt';
  const filePath = `${getFilesFolderPath('hash')}/${fileName}`;
  const { createHash } = await import('node:crypto');

  await pipeline(
    createReadStream(filePath),
    createHash('SHA256').setEncoding('hex'),
    process.stdout
  );
  console.log('ok');
};

await calculateHash();