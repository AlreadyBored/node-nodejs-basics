import fs from 'fs';
import ifExists from "./ifExists.js";
const list = async () => {
    // Write your code here
    if (!await ifExists('files')){
        throw new Error('FS operation failed');
    }

    (await fs.promises.readdir('files')).map(item => {
        console.log(item);
    })
};

await list();