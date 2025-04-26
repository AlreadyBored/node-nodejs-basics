import fs from 'node:fs/promises';

// list.js - implement function that prints array
// of all filenames from files folder into console
//  (if files folder doesn't exists Error with message
// FS operation failed must be thrown)

const list = async () => {
    // Write your code here
    const pathToFolder = './files';
    const errorMessage = 'FS operation failed';

    try {
        await fs.access(pathToFolder);
        const filesArray = await fs.readdir(pathToFolder);

        for (let fileName of filesArray) {
            console.log(fileName);
        }
    } catch {
        throw new Error(errorMessage);
    }
};

await list();
