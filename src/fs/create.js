import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createFreshFile = async () => {
  const dirPath = path.join(__dirname, 'files'); // to‘g‘ri yo‘l
  const filePath = path.join(dirPath, 'fresh.txt');
          
  try {    
    await fs.mkdir(dirPath, { recursive: true });

    await fs.access(filePath);
    throw new Error('FS operation failed: File already exists');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(filePath, 'I am fresh and young');
    } else if (err.message.startsWith('FS operation failed')) {
      throw err;
    } else {     
      throw err;
    }  

  }
};      
await createFreshFile();


