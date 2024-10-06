import fs from 'fs';

const create = async () => {
    const target = './files/fresh.txt';

    fs.readFile(target, (err, data) => {
        if (err?.code === 'ENOENT' && !data) {
            fs.writeFile(target, 'I am fresh and young', () => {});
        } else if (data) {
            throw Error ('FS operation failed');
        }
    });
};

await create();