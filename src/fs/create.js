import fs from 'node:fs/promises';

const handleFsError = (error) => {
    if (error?.code === 'EEXIST') {
        throw new Error('FS operation failed');
    }
    throw error;
};

const create = async () => {
    const content = 'I am fresh and young';
    try {
        await fs.writeFile('./files/fresh.txt', content, {flag: 'wx'});
    } catch (error) {
        handleFsError(error);
    }
}
    await create();
