import fs from 'fs';

export const remove = async () => {
    const fileName = 'fileToRemove.txt';
    const folder = 'files';
    try {
        if (!fs.existsSync(`${folder}/${fileName}`)) {
            throw new Error('FS operation failed');
        };

        fs.unlink(`${folder}/${fileName}`, (err) => {
            if(err) throw err;
            console.log(`File "${fileName}" was deleted!`);
        });
    } catch (error) {
        throw new Error(error);
    }
};

remove();
