import fs from 'fs';

export const list = async () => {
    if (fs.existsSync('./files')) {
        fs.readdir('./files', (err, files) => {
            if (err) throw err;
            files.forEach(element => {
                console.log(element);
            });
        });
    }
    else throw Error('FS operation failed');
};

await list();