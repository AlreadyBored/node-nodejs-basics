import { access, rename as renameNodejs } from 'node:fs/promises'
import path from 'path';
import { constants } from 'node:fs';

export const rename = async () => {
    const dirname = path.resolve();

    const filesFolderPath = path.join(dirname, 'files');

    const filePathTxt = path.join(filesFolderPath, 'wrongFileName.txt');
    const filePathMd = path.join(filesFolderPath, 'wrongFileName.txt');

    try{
        await access(filePathTxt, constants.R_OK);
        renameNodejs(filePathTxt, filePathMd);
    }catch(e) {
        throw e;
    }
};

rename()