import { rename as renameFile} from 'node:fs/promises';

export const rename = async () => {

    const errorMessage = 'FS operation failed';

    try {
        await renameFile('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md');
    } catch (error) {
        throw new Error(errorMessage);
    }
};

rename();