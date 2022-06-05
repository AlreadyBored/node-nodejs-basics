import { readdir, mkdir, copyFile } from 'fs';

export const copy = async () => {
    
    const initialFolder =  './files/';
    const targetFolderName = './files_copy/';
    
    await mkdir(targetFolderName, (err) => {
        if (err) {
            if (err.code === 'EEXIST') {
              console.error(`${targetFolderName} already exists`);
              return;
            }
        
            throw err;
          }

          return readdir(initialFolder, (err, files) => {
            if (err) throw err;

            files.forEach(file => {
                const initialFile = initialFolder + file;
                const targetFilePath = targetFolderName + file;

                copyFile(initialFile, targetFilePath, (err) => {
                    if (err) throw err;
                });
            });
        })

    }) 
};
