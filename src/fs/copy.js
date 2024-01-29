import { cp } from 'node:fs';

const copy = async () => {
    const src = './files';
    const dest = './files_copy';
    cp(src, dest, {recursive: true, errorOnExist: true, force: false}, function(err) {
        if (err) { 
            if (err.code === 'ERR_FS_CP_EEXIST' || err.code === 'ENOENT') 
                throw 'FS operation failed';

            throw err;
        }
    })
};

await copy();
