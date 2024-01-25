import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const copy = async () => {
    // Write your code here
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);

      const mainPath = path.join(__dirname, 'files');
      const copyPath = path.join(__dirname, 'files_copy');

      try {
        await fs.access(mainPath);
        await fs.mkdir(copyPath);          
        
        const files = await fs.readdir(mainPath);
        files.forEach(async (file) => {
          const mainFile = path.join(mainPath, file);
          const copyFile = path.join(copyPath, file);
          await fs.copyFile(mainFile, copyFile);
        })
        console.log('folder copied');
      } catch (error) {
        throw new Error('FS operation failed');
      }
      
    } catch (error) {
      console.error(error.message);
    }
};

await copy();
