import fs from 'fs/promises';

const list = async () => {
    const targerDirPath = './src/fs/files';
    try {
        await fs.access(targerDirPath, fs.constants.F_OK);
    } catch (accessError) {
        throw new Error('FS operation failed');
    }

    try {
        const listOfFiles = await fs.readdir(targerDirPath, {recursive: true});
        console.log('Files from folder "fiiles":', listOfFiles);
    } catch (readDirError) {
        throw readDirError;
    }
};

await list();