import {readFile, open, rm} from 'node:fs/promises';

const rename = async () => {
    // Write your code here
    try {
        const sourceFile = './src/fs/files/wrongFilename.txt'
        const destFile = './src/fs/files/wrongFilename.md'

        const data = await readFile(sourceFile);

        const fileId = await open(destFile, 'wx');
        await fileId.appendFile(data)
        await fileId.close();

        await rm(sourceFile);
    } catch (error) {
        console.log('FS operation failed')
    }     
};

await rename();