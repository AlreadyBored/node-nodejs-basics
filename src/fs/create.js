import fs from 'fs';

const create = async () => {
    if (fs.existsSync('src/fs/files/fresh.txt')) console.log(new Error('File already exists'));
    else fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', error => error ? console.log(error) : null);
};

await create();