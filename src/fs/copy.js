import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, constants, mkdir, readdir, copyFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPath = (folder, item = '') => join(__dirname, folder, item);

const copy = async () => {
    access(getPath('files'), constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            mkdir(getPath('files_copy'), (err) => {
                if(err) {
                    throw new Error(err.code === 'EEXIST' ? 'FS operation failed' : err)
                } else {
                    readdir(getPath('files'), ((err, files) => {
                        if(err) throw err
                        files.forEach((item) => {
                            copyFile(
                                getPath('files', item),
                                getPath('files_copy', item),
                                (err) => {if(err) throw err})
                        })
                    }
                    ))
                }
            });
        }
      });
};

await copy();
