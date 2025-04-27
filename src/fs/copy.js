import fs from 'fs';

const copy = async () => {
    const sourceDirPath = './src/fs/files/',
          targetDirPath = './src/fs/files_copy/';
    
    fs.access(sourceDirPath, fs.constants.F_OK, (accessError) => {
        if (accessError) {
            throw new Error('FS operation failed');
        }
    });

    fs.access(targetDirPath, fs.constants.F_OK, (accessError) => {
        if (accessError) {
            fs.cp(sourceDirPath, targetDirPath, {force: false, errorOnExist: true, recursive: true}, (copyFolderError) => {
                if (copyFolderError) {
                    throw copyFolderError;
                } else {
                    console.log('Folder "Files" is successfully copied to "Files_copy"');
                }
                
            });
        } else {
            throw new Error('FS operation failed');
        }
    });
    
};

await copy();
