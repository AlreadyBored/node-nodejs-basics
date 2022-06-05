import * as fs from 'fs';

export const list = async () => {
    try {
        fs.access('./src/fs/files', (err) => {
            if (err) {
                throw new Error('FS operation failed');
            } else {
                fs.readdir('./src/fs/files/', (err, files) => {
                    if (err) {
                        throw err;
                    }
                    files.forEach(file => {
                      console.log(file);
                    });
                  });
            }
        });        
    } catch (e) {
        console.log(e);
    }
};

await list();