import { readFile } from 'fs/promises';

export const read = async () => {
    // Write your code here 

    const PATH = './src/fs/files/fileToRead.txt';
	const ERROR_MSG = 'FS operation failed';

    try {
        try {
            const data = await readFile(PATH, {encoding: 'utf-8'});
            console.log(data)
        } catch {
            throw new Error(ERROR_MSG);
        }
    } catch(err) {
        console.log(err);
    }
};
    
read();