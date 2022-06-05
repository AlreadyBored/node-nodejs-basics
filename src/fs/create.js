import fs from 'fs';

export const create = async () => {
    try {
        if (fs.existsSync('files/fresh.txt')) {
            throw new Error('FS operation failed')
        }
        await fs.writeFile('files/fresh.txt', 'I am fresh and young', (err, data) => {
            if (err) throw new Error(err)
        })
    } catch (error) {
        throw new Error(error)
    }

};

create();