import fs from 'fs';

export const rename = async () => {
    const fileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';
    const folder = 'files';
    try {
        if (!fs.existsSync(`${folder}/${fileName}`)) {
            throw new Error('FS operation failed');
        };

        if (fs.existsSync(`${folder}/${newFileName}`)) {
            throw new Error('FS operation failed');
        };

        await fs.rename(`${folder}/${fileName}`, `${folder}/${newFileName}`, (err) => {
            if(err) throw err;
            console.log(`File "${fileName}" was renamed!`);
        });
    } catch (error) {
        throw new Error(error);
    }
};
