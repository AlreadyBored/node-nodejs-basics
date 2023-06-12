import fs from 'fs/promises';
import { access, constants } from 'fs';
import path from 'path';
import url from 'url'

const create = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const file = path.join(__dirname, 'files', 'fresh.txt');
  const data = 'I am fresh and young';
  access(file, constants.F_OK, (error) => {
    if (error) {
        fs.writeFile(file, data, (err) => {
            if (err) throw err;
        });
    } else {
        throw new Error('FS operation failed');
    }

  });
};

await create();