import * as fs from 'fs';

const errorMessage = 'FS operation failed';

const rename = async () => {
    await fs.promises.access('src/fs/files/wrongFilename.txt').then(async () => {
        return await fs.promises.access('src/fs/files/properFilename.md')
        .then(() => console.log(errorMessage))
        .catch(async () => await fs.promises.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md'))
    }).catch(() => console.log(errorMessage));
};

await rename();