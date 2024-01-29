import * as fs from 'fs';

const errorMessage = 'FS operation failed';

const remove = async () => {
    await fs.promises.rm('src/fs/files/fileToRemove.txt').catch(() => console.log(errorMessage));
};

await remove();