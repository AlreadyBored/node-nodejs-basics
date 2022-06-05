import fs from 'fs';

export const copy = async () => {
    try {
        if (!fs.existsSync('./files/') || fs.existsSync('./files_copy/')) {
            throw new Error('FS operation failed')
        }

        await fs.readdir('./files', (err, data) => {
            if (err) throw new Error(err);
            fs.mkdirSync('./files_copy/')
            for (const file of data) {
                fs.copyFile(`./files/${file}`, `./files_copy/${file}`, (err) => {
                    if (err) throw new Error(err)
                })
            }
        })
    } catch (error) {
        throw new Error(error)
    }
};

copy()