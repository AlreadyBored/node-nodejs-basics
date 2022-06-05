import * as fs from 'fs';

export const rename = async () => {
    try {
        fs.access('./src/fs/files/properFilename.md', (err) => {
            if (!err) {
                throw new Error('FS operation failed');
            } else {
                fs.access('./src/fs/files/wrongFilename.txt', (err) => {
                    if (err) {
                        throw new Error('FS operation failed');
                    } else {
                        fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', 
                        (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                    }
                });
            }
        });
    } catch (e) {
        console.log(e);
    }
};

await rename();