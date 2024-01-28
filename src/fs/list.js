import { readdirSync, existsSync } from 'fs';
const list = async () => {
    const sourceFolder = './files/';
    if (!existsSync(sourceFolder)) {
        console.error("FS operation failed");
    } else {
        console.log(await readdirSync(sourceFolder));
    }
};

await list();
/*
*  implement function that prints all array of filenames
*  from files folder into console (if files folder
*  doesn't exist Error with message FS operation failed
*  must be thrown)
*
* */
