import * as path from 'path';
import * as fs from 'fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exists = (path) => {
  return new Promise((resolve) => {
    fs.access(path, fs.constants.F_OK, (error) => {
      if (!error) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export const calculateHash = async () => {
  try {
    const { createHash } = await import('crypto');
    const pathToSourceFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const isSourceFileExists = await exists(pathToSourceFile);
    if (!isSourceFileExists) {
      throw new Error('No file in directory!');
    }
    const readData = await readFile(pathToSourceFile);
    const createdHash = createHash('sha256').update(readData).digest('hex');
    return createdHash;
  } catch (error) {
    process.stderr.write(error.message);
    process.exit(1);
  }
};

calculateHash().then(res => console.log(res))
