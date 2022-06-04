import fsp from 'fs/promises';

export const rename = async () => {
    try {
        fsp.rename('files/wrongFilename.txt','files/properFilename.md')

    } catch(e) {
        console.log('FS operation failed!');
    }
};
rename()

