import { access, constants,  rm as removeFile } from 'fs';
import { resolve } from 'path';

const remove = async () => {
    const absolutePath = await resolve('files', 'fileToRemove.txt')
    await access(absolutePath, constants.F_OK, (err) => {
        if(err && err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        };
    });

    await removeFile(absolutePath, (err) => {
        if(err){
            throw new Error('FS operation failed');
        };
        console.log("File deleted successfully")
    });
};

await remove();