import fs from 'fs/promises';
import path from 'path';

const read = async () => {
    const folderPath = 'src/fs/files';
    const filePath = path.join(folderPath, 'fileToRead.txt');
    const errorMessage = 'FS operation failed';

    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        console.log(fileContent);
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await read();
