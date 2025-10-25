import { rename as setNewName } from 'fs/promises'
import { __dirname } from '../utils.js'
import { join } from 'path'
import { existsSync } from 'fs'

const rename = async () => {
  const oldFile = join(__dirname, 'fs', 'files', 'wrongFilename.txt');
  const newFile = join(__dirname, 'fs', 'files', 'properFilename.md');
  try {
    if (!existsSync(oldFile) || existsSync(newFile)) {
      throw new Error('FS operation failed');
    }
    await setNewName(oldFile, newFile);
  } catch (error) {
   throw error;
  }
}

await rename();
