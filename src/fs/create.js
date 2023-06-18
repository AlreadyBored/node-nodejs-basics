import {writeFile} from 'node:fs/promises';

const create = async () => {

    const filePath = './files/fresh.txt';
    const fileContent = 'I am fresh and young';
    const errorMessage = new Error('FS operation failed'); 
    
    try {
        await writeFile(filePath, fileContent, { flag: 'wx' });
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw errorMessage;            
        } else {
            console.error(error.message);
        }
    } 
};

await create();