import { rm } from 'fs/promises';

export const remove = async () => {
    // Write your code here 

    const PATH = './src/fs/files/fileToRemove.txt';
	const ERROR_MSG = 'FS operation failed';

    try {
        try {
            await rm(PATH);
        } catch {
            throw new Error(ERROR_MSG);
        }
    } catch(err) {
        console.log(err);
    }

};

remove();