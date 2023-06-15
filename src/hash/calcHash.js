import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

import { isFileOrDirExists } from "../utils/utils.js";

const calculateHash = async () => {
  const sourceFile = 'src/hash/files/fileToCalculateHashFor.txt';

  try {
    const isFileExist = isFileOrDirExists(sourceFile);
    if (!isFileExist) throw new Error('FS operation failed');

    const content = await readFile(sourceFile, 'utf8');
    const hexHash = createHash('sha256').update(content).digest('hex');
    console.log(hexHash);

  } catch (error) {
    throw error;
  }
};

await calculateHash();
