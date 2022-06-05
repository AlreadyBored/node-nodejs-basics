import * as fs from 'fs';

export const copy = async () => {
    try {
        fs.access('./src/fs/files', (err) => {
            if (err) {
                throw new Error('FS operation failed');
            } else {
                fs.access('./src/fs/files_copy', (err) => {
                    if (!err) {
                        throw new Error('FS operation failed');
                    } else {
                        fs.mkdir('./src/fs/files_copy', (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                        fs.cp('src/fs/files', 'src/fs/files_copy', {recursive: true}, (err) => {
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

await copy();