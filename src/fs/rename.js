import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { pathExists } from './path-exists.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OLD_PATH = join(__dirname, 'files', 'wrongFilename.txt');
const NEW_PATH = join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  const oldPathExists = await pathExists(OLD_PATH);
  const newPathExists = await pathExists(NEW_PATH);

  if (!oldPathExists || newPathExists) throw new Error('FS operation failed');

  try {
    await fs.rename(OLD_PATH, NEW_PATH);
    console.log('File successfully renamed');
  } catch (error) {
    console.error('Failed to rename file');
  }
};

await rename();
