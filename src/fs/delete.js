import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, constants, rm } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPath = (item = '') => join(__dirname, 'files', item);

const remove = async () => {
    access(getPath('fileToRemove.txt'), constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            rm(getPath('fileToRemove.txt'), (err) => {
                if(err) throw err
            })
        }
      });
};

await remove();