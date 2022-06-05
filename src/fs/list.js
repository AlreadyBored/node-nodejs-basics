import fs from 'fs';

export const list = async () => {
    const folderName = 'files';
    try {
        if (!fs.existsSync(folderName)) {
            throw new Error('FS operation failed');
        };

        await fs.readdir(folderName, (err, data) => {
            if (err) throw new Error();
            console.log(data);
        })
    } catch (error) {
        throw new Error(error);
    }
};

list();
