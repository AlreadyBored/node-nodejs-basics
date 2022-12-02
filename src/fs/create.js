import { promises as fs } from 'fs'

export const create = async() => {
    fs.writeFile('./files/fresh.txt', 'I am fresh and young', { flag: 'wx' })
        .then(() => console.log('Save complete!'))
        .catch((err) => {
            console.log('FS operation failed' + err);
        });
};
create();