import { access, rename as _rename } from 'fs/promises';

export const rename = async () => {
    let isNewFileExist;

    try {
        await access('./files/wrongFilename.txt');
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await access('./files/properFilename.md');
        console.log('here')
        isNewFileExist = true;
    } catch {
        isNewFileExist = false;
    }

    if(isNewFileExist) {
        throw new Error('FS operation failed');
    } else {
        _rename('./files/wrongFilename.txt', './files/properFilename.md', function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
    }
};
