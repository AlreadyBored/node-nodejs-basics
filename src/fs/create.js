import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const create = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const freshFile = path.join(__dirname, 'files', 'fresh.txt');
    if (fs.existsSync(freshFile)) {
      throw new Error('FS operation failed');
    }

    fs.writeFile(freshFile, 'I am fresh and young', (err) => {
      if (err) {
        throw new Error(err);
      }
      console.log('file created');
    });
};

try {
  await create();  
} catch (error) {
  console.error(error.message);
}
