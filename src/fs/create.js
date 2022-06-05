import { access, appendFile } from 'fs/promises';

const FILE_PATH = 'files/fresh.txt';
const FILE_EXISTS_ERROR_MESSAGE = 'FS operation failed';

export const create = async () => {
    
    try {
        await access(FILE_PATH)

        throw new Error(FILE_EXISTS_ERROR_MESSAGE);
    } catch(err) {
        if (err.message === FILE_EXISTS_ERROR_MESSAGE) {
            throw err;
        } else {
            await appendFile(FILE_PATH, 'I am fresh and young');
        }
    }
};
