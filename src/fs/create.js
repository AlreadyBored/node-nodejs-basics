import { open, writeFile } from 'node:fs/promises';

const create = async () => {
    const pFile = 'src/fs/files/fresh.txt';
    try {
        await open(pFile, 'wx');
        const content = 'I am fresh and young'

        try {
            await writeFile(pFile, content);
        } catch (error) {
            throw error
        }
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw new Error('FS operation failed')
        }
        else throw error
    }
};

await create();