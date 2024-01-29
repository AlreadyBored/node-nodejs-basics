import fs, { existsSync } from 'fs';

const list = async () => {
    try {
        if (!fs.existsSync('./files')) {
            throw new Error('FS operation failed');
        } else {
            const files = fs.readdirSync('./files');
            files.forEach(element => {
                console.log(element);
            });
        }
    } catch (err) {
        console.error('Something went wrong!');
    }
};

await list();