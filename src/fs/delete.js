import { join } from 'path'
import { __dirname } from '../utils.js'
import { unlink } from 'fs/promises'
import { existsSync } from 'fs'

const remove = async () => {
  const file = join(__dirname, 'fs/files/fileToRemove.txt');
  try {
    if (!existsSync(file)) {
      throw new Error('FS operation failed');
    }
    await unlink(file);
  } catch (error) {
    throw error;
  }
}

await remove();
