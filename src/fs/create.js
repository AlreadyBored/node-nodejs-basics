import fs from 'fs';
import ifExists from "./ifExists.js";
const create = async () => {
    // Write your code here
    const content = 'I am fresh and young';
    const pathToFile = new URL('files/fresh.txt', import.meta.url).pathname.substring(1);
    if (await ifExists(pathToFile)){
        throw new Error('FS operation failed');
    } else {
        fs.writeFile(pathToFile, content, () => {
            console.log('File is created successfully!');
        });
    }
};

await create();