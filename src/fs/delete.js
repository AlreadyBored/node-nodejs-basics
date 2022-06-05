import fs from 'fs';

export const remove = async () => {
    try {
        if (!fs.existsSync('files/fileToRemove.txt')) {
            throw new Error('FS operation failed')
        }
        await fs.unlink('files/fileToRemove.txt', (err, data) => {
            if (err) throw new Error(err)
        })
    } catch (error) {
        throw new Error(error)
    } 
};

remove();