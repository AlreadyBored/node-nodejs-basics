import fs from 'fs';

export const read = async () => {
    const fileName = 'fileToRead.txt';
    const folder = 'files';
    try {
        if (!fs.existsSync(`${folder}/${fileName}`)) {
            throw new Error('FS operation failed');
        };

        fs.readFile(`${folder}/${fileName}`, 'utf8', (err, data) => {
            if(err) throw err;
            console.log(data);
        });
    } catch (error) {
        throw new Error(error);
    }
};
