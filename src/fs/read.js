import { readFile, access } from 'fs/promises';
import { constants } from 'fs';

const read = async () => {
    const filePath = 'files/fileToRead.txt';

    try {
        await access(filePath, constants.F_OK);

        const content = await readFile(filePath, 'utf8');

        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();