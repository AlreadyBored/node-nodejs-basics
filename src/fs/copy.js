import * as fs from 'fs/promises'

export const copy = async () => {
    const source = './src/fs/files';
    const dest = './src/fs/files_copy';

    try {
        const readFiles = await fs.readdir(source)

        await fs.access(source);
        await fs.mkdir(dest);

        for (const file of readFiles) {
            await fs.copyFile(source + '/' + file, dest + '/' + file)
        }
    } catch (error) {
        throw new Error('FS operation failed')
    }

};

await copy()