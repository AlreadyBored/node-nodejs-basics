import fs from 'fs';

export const list = async () => {
    try {
        if (!fs.existsSync('./files/')) {
            throw new Error('FS operation failed')
        }

        await fs.readdir('./files', (err, data) => {
            if (err) throw new Error(err);
            for (const file of data) {
                console.log(file);
            }
        })
    } catch (error) {
        throw new Error(error)
    }
};

list();