import { promises as fs } from 'fs';
import { readdir } from 'node:fs/promises';

const copy = async () => {
  try {
    const copyFolderCheckFiles = await readdir('src/fs/files');
    if (copyFolderCheckFiles){
    await fs.cp('src/fs/files', 'src/fs/files_copy', {errorOnExist: true, recursive: true, force: false})
    } else {
      throw new Error('FS operation failed')
    }
  }
  catch(err){
    throw new Error('FS operation failed')
  }
};

await copy();
