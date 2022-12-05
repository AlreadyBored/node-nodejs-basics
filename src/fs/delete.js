import { access, constants,  rm as removeFile } from 'node:fs';
import { resolve } from 'node:path';

const remove = async () => {
    const absoluteFilePath = await resolve('files', 'fileToRemove.txt')
    await access(absoluteFilePath, constants.F_OK, (err) => {
        if(err && err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        };
    });

    await removeFile(absoluteFilePath, (err) => {
        if(err){
            throw new Error('FS operation failed');
        };
        console.log("File deleted successfully")
    });
};

await remove();