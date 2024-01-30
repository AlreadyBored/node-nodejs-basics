import {cp} from 'node:fs';
import {resolve} from 'node:path';

const copy = async () => {
    const initialPath = resolve('src', 'fs');
    const options = {
        recursive: true,
        errorOnExist: true,
        force: false
    };

    cp(initialPath + '/files', initialPath + '/files_copy', options, (err) => {
        if (err && (err.code === 'ENOENT' || err.code === 'ERR_FS_CP_EEXIST')) {
            throw new Error('FS operation failed');
        }
    })
};

await copy();
