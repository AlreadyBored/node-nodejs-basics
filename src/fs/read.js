import fs from 'fs';

export const read = async () => {
    try {
        if (!fs.existsSync('files/fileToRead.txt')) {
            throw new Error('FS operation failed')
        }
        await fs.readFile('files/fileToRead.txt', 'utf8', (err, data) => {
            if (err) throw new Error(err)
            console.log(data);
        })
    } catch (error) {
        throw new Error(error)
    }
};

read();