import { existsSync as exists } from 'fs';
import fsAsync from 'fs/promises'

const newFile = `${import.meta.dirname}/files/fresh.txt`;
const newFileText = 'I am fresh and young';

const create = async () => {
    if (exists(newFile))  {
        throw Error('FS operation failed');
    }
    
    await fsAsync.appendFile(newFile, newFileText);
};

await create();