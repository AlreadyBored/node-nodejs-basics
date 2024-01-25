import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const create = async () => {
    // Write your code here 
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const freshFile = path.join(__dirname, 'files', 'fresh.txt');

      let fileExist = false;
      try {
        await fs.access(freshFile);
        fileExist = true;
      } catch (error) {
        try {
          await fs.writeFile(freshFile, 'I am fresh and young');
          console.log('file created');
        } catch (error) {
          throw new Error(writeError);
        }        
      } finally {
        if (fileExist)
          throw new Error('FS operation failed');
      }
    } catch (error) {
      console.error(error.message);
    }
};

await create();  
