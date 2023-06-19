import { readFile } from 'node:fs/promises';
import { getPath } from '../utils/getPath.js';
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    const src = getPath(import.meta.url, "fileToCalculateHashFor.txt");

    try {
     const content = await readFile(src, {encoding : "utf8"});
     const hash = createHash('sha256', content).update(content).digest('hex');
     console.log(hash);
    } catch (e) {
      throw new Error('FS operation failed: ' + e.message);
    }
};

await calculateHash();