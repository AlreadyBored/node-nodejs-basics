import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';

const directoryPath = dirname(fileURLToPath(import.meta.url));

export const copy = async () => {
   
    const errorMessage = 'FS operation failed';

    try {
        await mkdir(directoryPath + '/files_copy');
        const filesFolder = await readdir(directoryPath + '/files');

        await Promise.all(filesFolder.map(el => copyFile(`${directoryPath}/files/${el}`, `${directoryPath}/files_copy/${el}`)));
    
    } catch (error) {
        throw new Error(errorMessage);
    }
};

copy();
