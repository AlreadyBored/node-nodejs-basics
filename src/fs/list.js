import fs from 'fs';

const list = async () => {
    // Write your code here
    fs.access('files', (err) => {
        if (err) {
            throw Error ('FS operation failed');
        }
        fs.readdir('files', (err, files) => {
            if (err) {
                return err;
            }
            console.log(files);
        });
    });
};

await list();