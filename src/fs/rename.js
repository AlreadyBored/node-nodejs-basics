import fs from 'node:fs/promises';
import path from 'node:path';
import {useFSVariables} from "./utils.js";

const rename = async () => {
  try {
    const { __dirname } = useFSVariables();
    const oldPath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.resolve(__dirname, 'files', 'properFilename.md');
    await fs.rename(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
