import fs from 'fs';
import path from 'path';

const create = async () => {
      const folderPath = path.join(process.cwd(), 'files');
      const filePath = path.join(folderPath, 'fresh.txt');
      const content = 'I am fresh and young';
    
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
    
      if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
      }
    
      fs.writeFileSync(filePath, content, 'utf8');
}

await create();