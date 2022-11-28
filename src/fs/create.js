import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    // Write your code here 
    const file = `${__dirname}/files/fresh.txt`;

    fs.access(file, fs.constants.F_OK, (err) => {
        if (err) {
            // console.log('File does not exist')
            fs.writeFile(
                path.join(__dirname, 'files', 'fresh.txt'),
                'I am fresh and young',
                (err) => {
                    if (err) throw err
                    // console.log('File created')
                }
            )
        } else {
            throw new Error('FS operation failed')
        }
      });
};

await create();