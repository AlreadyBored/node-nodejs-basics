import fs from 'fs/promises';

const read = async () => {
    const targetFilePath = './src/fs/files/fileToRead.txt';

    try {
        const filesContent = await fs.readFile(targetFilePath, { encoding: 'utf8' });
        console.log(filesContent);
    } catch (readFileError) {
        throw new Error('FS operation failed');
    }
};

await read();