import {mkdir, readdir, copyFile} from 'fs/promises';

export const copy = async () => {
    try {
        const files = await readdir('src/fs/files');
        await mkdir('src/fs/files_copy');

        for (const file of files) {
            await copyFile(`src/fs/files/${file}`, `src/fs/files_copy/${file}`);
        }
    } catch {
        throw new Error('FS operation failed')
    }
}

copy()
    .then(() => console.log('success'))
    .catch(() => console.log('Please, check what files forder exist or delete files_copy forder'));
