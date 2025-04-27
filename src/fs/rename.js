import fs from 'fs';

const rename = async () => {
    const wrongFilenamePath = './src/fs/files/wrongFilename.txt',
          correctFilenamePath = './src/fs/files/properFilename.md';

    fs.access(wrongFilenamePath, fs.constants.F_OK, (accessError) => {
            if (accessError) {
                throw new Error('FS operation failed');
            }
        });
    
    fs.access(correctFilenamePath, fs.constants.F_OK, (accessError) => {
        if (accessError) {
            fs.rename(wrongFilenamePath, correctFilenamePath, (renameFileError) => {
                if (renameFileError) {
                    throw renameFileError;
                } else {
                    console.log('Filename is changed to correct one');
                }
            });
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await rename();