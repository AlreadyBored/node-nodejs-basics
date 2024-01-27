import fs from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
  const currentDir = path.join(path.resolve(''), 'fs', 'files');
  fs.access(currentDir)
    .then(
      () => fs.readdir(currentDir, { withFileTypes: true, recursive: true })  
        .then((item) => {
          item.forEach((dir) => {
            const name = path.join(dir.path.replace(currentDir, ''), dir.name); 
            console.log(name);
          });
        })        
    )
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await list();