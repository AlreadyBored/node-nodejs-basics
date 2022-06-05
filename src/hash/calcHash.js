import { createHash } from 'crypto';
import fs from 'fs/promises';
export const calculateHash = async () => {
  const filePath = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
  const file = await fs.readFile(filePath);
  const hash = createHash('sha256').update(file).digest('hex');
  return hash;
};
