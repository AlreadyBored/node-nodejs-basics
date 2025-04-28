import { promises as fs } from 'fs';
import { join } from 'path';

const copy = async () => {
    const srcFolder = join('src', 'fs', 'files');
    const destFolder = join('src', 'fs', 'files_copy');

    try {
        await fs.access(srcFolder);
    
        try {
          await fs.access(destFolder);
          throw new Error('FS operation failed');
        } catch (err) {
          if (err.code !== 'ENOENT') {
            throw new Error('FS operation failed');
          }
        }
    
        await fs.mkdir(destFolder);
    
        const files = await fs.readdir(srcFolder);
    
        for (const file of files) {
          const srcPath = join(srcFolder, file);
          const destPath = join(destFolder, file);
    
          await fs.copyFile(srcPath, destPath);
        }
    
      } catch (err) {
        throw new Error('FS operation failed');
      }
    
};

export { copy };
