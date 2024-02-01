import { existsSync, rename as renameFS } from 'node:fs';
import { join } from 'node:path';

const rename = async (oldName, newName, folder) => {
    const oldFilePath = join(folder, oldName);
    const newFilePath = join(folder, newName);
    const oldNameExists = existsSync(oldFilePath);
    const newNameExists = existsSync(newFilePath);


    if(!oldNameExists || newNameExists) {
        throw new Error('FS operation failed')
    } else {
        renameFS(oldFilePath, newFilePath, (err) => {
            if (err) throw new Error(err.message);
        });
    }
};

await rename('wrongFilename.txt', 'properFilename.md', 'files');