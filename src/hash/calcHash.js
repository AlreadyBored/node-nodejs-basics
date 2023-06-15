import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  try {
    const data = await fs.promises.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    
    const hash = crypto.createHash('sha256');
    hash.update(data);
    
    console.log(hash.digest('hex'));
  } catch (error) {
    throw new Error('FS operation failed: file can not be read or does not exist');
  }
};

await calculateHash();