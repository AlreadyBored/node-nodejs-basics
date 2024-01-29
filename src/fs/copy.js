import fs from 'fs'
import fsPromises from 'fs/promises'
const copy = async () => {
  if(fs.existsSync('src/fs/files_copy/')) throw new Error('FS operation failed');
  else {
    await fsPromises.mkdir('src/fs/files_copy/');
    const sourceDir = await fsPromises.opendir('src/fs/files/')
    for await (const i of sourceDir) {
      fsPromises.copyFile(i.path + i.name, `src/fs/files_copy/${i.name}`)
    }
  }
};

await copy();
