import { rename as rn, access, constants } from 'node:fs/promises';
const error = new Error('FS operation failed');

const rename = async() => {
    const oldFileName = './fs/files/wrongFilename.txt';
    const newFileName = './fs/files/properFilename.md';
    try {
        await rn(oldFileName, newFileName);
    } catch (err) {
        console.error(error.message);
    }

};

await rename();