import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const copy = async () => {
    // Write your code here
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);

      const mainPath = path.join(__dirname, 'files');
      const copyPath = path.join(__dirname, 'files_copy');

      if (!fs.existsSync(mainPath)) {
        throw new Error('FS operation failed');
      }

      if (fs.existsSync(copyPath)) {
        throw new Error('FS operation failed');
      }

      fs.mkdirSync(copyPath);

      fs.readdirSync(mainPath).forEach((file) => {
        const mainFile = path.join(mainPath, file);
        const copyFile = path.join(copyPath, file);
        fs.copyFileSync(mainFile, copyFile);
      });
    
      console.log('folder copied');
    } catch (error) {
      console.error(error.message);
    }
};

await copy();
