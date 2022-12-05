import { cp, access, constants } from 'fs';

const copy = async () => {
    const source = './files';
    const destination = './files_copy';

    await access(source, constants.F_OK, (err) => {
        if(err && err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        };
    });

    await cp(source, destination, { 'recursive': true, 'force': false, 'errorOnExist': true }, (err)=>{
        if (err && err.info.code === 'EEXIST') {
            throw new Error('FS operation failed');
        };
        console.log('Folder copied Successfully!');
    });
};

copy();