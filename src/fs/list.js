import { readdir } from 'fs/promises'
import { __dirname } from '../utils.js'
import { join } from 'path'
import { existsSync } from 'fs'

const list = async () => {
  try {
    const folder = join(__dirname, 'fs', 'files');

    if (!existsSync(folder)) {
      throw new Error('FS operation failed');
    }
    
    const files = await readdir(folder);
    console.log(files);
  } catch (error) {
    throw error;
  }
}

await list();
