import { readdir } from 'fs/promises';

export const list = async () => {
    // Write your code here 

    const PATH = './src/fs/files';
	const ERROR_MSG = 'FS operation failed';
    
    try {
        try {
            const flieList = await readdir(PATH);
            console.log(flieList);
        } catch {
            throw new Error(ERROR_MSG);
        }
    } catch(err) {
        console.log(err);
    };
};

list();