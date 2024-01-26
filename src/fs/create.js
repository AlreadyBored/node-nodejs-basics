import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, constants, writeFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const filePath = join(__dirname, 'files', 'fresh.txt');

    access(filePath, constants.F_OK, (err) => {
        if (err) {
            writeFile(
                filePath,
                'I am fresh and young',
                (err) => {
                    if (err) throw err;

                    console.log('CREATED file fresh.txt');
                })
        } else {
            throw new Error('FS operation failed')
        }
      });
};

await create();