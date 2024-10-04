import { getFilesFolderPath } from "../utils.js";
import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const fileName = 'fileToCalculateHashFor.txt';
  const filePath = `${getFilesFolderPath('hash')}/${fileName}`;
  const readStream = createReadStream(filePath);

  const hash = createHash('sha256');

  await pipeline(
    readStream,
    hash,
  );
  process.stdout.write(`${hash.digest('hex')}\n`);
}   

await calculateHash();