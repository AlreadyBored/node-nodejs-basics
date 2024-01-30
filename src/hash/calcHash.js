import fs from 'fs/promises';
import crypto from 'crypto';

const calculateHash = async (fileToCalculateHashFor) => {
  const hash = crypto.createHash('sha256');

  try {
    const fileContents = await fs.readFile(fileToCalculateHashFor);

    hash.update(fileContents);

    const hashResult = hash.digest('hex');
    console.log(`SHA256 hash for ${fileToCalculateHashFor}: ${hashResult}`);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
};

const fileToCalculateHashFor = 'files/fileToCalculateHashFor.txt';

await calculateHash(fileToCalculateHashFor);