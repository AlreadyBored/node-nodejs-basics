import fs from 'fs';

export const rename = async () => {
    try {
        if (!fs.existsSync('files/wrongFilename.txt') && fs.existsSync('files/properFilename.md')) {
            throw new Error('FS operation failed')
        }
        await fs.rename('files/wrongFilename.txt', 'files/properFilename.md', (err, data) => {
            if (err) throw new Error(err)
        })
    } catch (error) {
        throw new Error(error)
    } 
};

rename();