import fsp from 'fs/promises';

export const rename = async () => {
    try {
        fsp.rename('files/wrongFilename.txt','files/properFilename.md')

    } catch(e) {
        console.log(e);
        throw new Error('FS operation failed');
    }
};
rename()

