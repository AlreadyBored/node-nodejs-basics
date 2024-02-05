import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async (fileToCalculateHashFor) => {
  const hash = crypto.createHash('sha256');

  try {
    const filePath = join(__dirname, fileToCalculateHashFor);
    const fileContents = await fs.readFile(filePath);

    hash.update(fileContents);

    const hashResult = hash.digest('hex');
    console.log(`SHA256 hash for ${filePath}: ${hashResult}`);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
};

const fileToCalculateHashFor = 'files/fileToCalculateHashFor.txt';

await calculateHash(fileToCalculateHashFor);