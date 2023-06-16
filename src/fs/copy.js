import { mkdir, readdir, copyFile } from 'node:fs/promises';

export const copy = async () => {
   
    const errorMessage = 'FS operation failed';

    try {
        await mkdir('./src/fs/files_copy');
        const filesFolder = await readdir('./src/fs/files');

        await Promise.all(filesFolder.map(el => copyFile(`./src/fs/files/${el}`, `./src/fs/files_copy/${el}`)));
    
    } catch (error) {
        throw new Error(errorMessage);
    }
};

copy();
