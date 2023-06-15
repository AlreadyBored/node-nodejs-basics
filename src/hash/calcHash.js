import fs from 'fs/promises';
import crypto from 'crypto';

const calculateHash = async () => {
    const filePath = 'files/fileToCalculateHashFor.txt';
  try {
    const fileData = await fs.readFile(filePath);
    const hash = crypto.createHash('sha256').update(fileData).digest('hex');
    console.log('SHA256 Hash:', hash);
  } catch (error) {
    throw new Error('File does not exist.');
  }
};

await calculateHash();