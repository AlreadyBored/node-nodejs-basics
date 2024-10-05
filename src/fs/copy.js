import fs from 'node:fs/promises';
import path from 'node:path';
import {useFSVariables} from "./utils.js";

const copy = async () => {
  try {
    const { __dirname} = useFSVariables();
    const sourcePath = path.resolve(__dirname, 'files');
    const destPath = path.resolve(__dirname, 'files_copy');
    await fs.cp(sourcePath, destPath, { recursive: true, errorOnExist: true, force: false });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
