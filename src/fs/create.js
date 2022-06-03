import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export const create = async () => {
  fs.readFile(
      path.join(__dirname, 'files', 'fresh.txt'),
      (err, data) => {
        try {
          if (err) {
            fs.writeFile(
                path.join(__dirname, 'files', 'fresh.txt'),
                'I am fresh and young',
                (err) => {
                  if (err) {
                    throw err;
                  }
                  console.log('File created');
                }
            )
          } else {
            throw new Error('FS operation failed');
          }
        } catch (err) {
          process.stderr.write(err.message);
          process.exit(1);
        }
      }
  )
};
create();

