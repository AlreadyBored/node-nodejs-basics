import { readdir, copyFile, mkdir } from 'node:fs/promises';

const copy = async () => {
    const error = new Error('FS operation failed');
    try {
        const files = await readdir('./files');
        readdir('./files_copy')
            .then(() => console.log(error))
            .catch(async () => {
                await mkdir('./files_copy');
                for (const file of files) {
                    await copyFile(`./files/${file}`, `./files_copy/${file}`);
                }
            });
    } catch {
        console.log(error);
    }
};

await copy();
