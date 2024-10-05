import * as fs from 'node:fs/promises';

const rename = async () => {
    const error = new Error('FS operation failed');

    try {
        await fs.readFile('./files/wrongFilename.txt');
        fs.readFile('./files/properFilename.md')
            .then(() => console.log(error))
            .catch(() => {
                fs.rename(
                    './files/wrongFilename.txt',
                    './files/properFilename.md'
                );
            });
    } catch {
        console.log(error);
    }
};

await rename();
