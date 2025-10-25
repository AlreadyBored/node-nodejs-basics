import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

const FILE_TO_READ = 'fileToCalculateHashFor.txt';

const calculateHash = async () => {
  const currentDirectory = process.cwd();
  const filePath = path.join(currentDirectory, '/files', FILE_TO_READ);
  const readableStream = fs.createReadStream(filePath, { encoding: 'utf8' });

  let fileContent = '';
  readableStream.on('data', chunk => {
      fileContent += chunk;
  });

  readableStream.on('end', () => {
      const sha256HashHex = createHash('sha256').update(fileContent).digest('hex');
      console.log(sha256HashHex);
  });

  readableStream.on('error', (err) => {
      console.error('An error occurred:', err);
  });
};

await calculateHash();
