import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async (file, content) => {
  const filePath = path.join(__dirname, 'files', file);

  fs.access(filePath, function(error){
    if (error) {
        fs.writeFile(filePath, content, 'utf8', (err) => {
          if (err) throw err;
         })
    } else {
      throw new Error('FS operation failed');
    }
  });
};

create('fresh.txt', 'I am fresh and young');