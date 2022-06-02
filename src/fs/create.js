import fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const create = async () => {
  const content = 'I am fresh and young';
  const outPutPath = `${__dirname}files/fresh.txt`

  fs.access(outPutPath, async (error) => {
    if (error) {
      await fs.appendFile(outPutPath, content, (err) => {
        if (err) {
          throw new Error('FS operation failed');
        }
      });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

create();
