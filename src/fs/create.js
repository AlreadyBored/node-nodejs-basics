import fs from 'node:fs';
import path from 'node:path';
const create = async () => {
    // Write your code here
    const filePath = path.join('fs', 'files', 'fresh.txt');
    const content = "I am fresh and young";

    fs.mkdir(path.dirname(filePath), { recursive: true }, err => {});
    fs.writeFile(filePath, content, { flag: 'wx' }, (err) => {
        if(err) {
            throw new Error('FS operation failed');
        }
    })
};

await create();