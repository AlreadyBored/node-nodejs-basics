import fs from 'fs';


const create = async () => {
    fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', {flag: 'wx'}, (err) => {
        if (err) console.error('FS operation failed');
    })
};

await create();