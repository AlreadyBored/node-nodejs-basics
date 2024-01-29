import * as fs from 'fs';

const errorMessage = 'FS operation failed';

const copy = async () => {
    await fs.promises.access('src/fs/files_copy')
        .then(() => console.log(errorMessage))
        .catch(async() => await fs.promises.cp('src/fs/files', 'src/fs/files_copy', { errorOnExist: true, recursive: true}))
        .catch(() => console.log(errorMessage))
};

await copy();
