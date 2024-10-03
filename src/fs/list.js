//  implement function that prints all array of filenames from files folder 
// into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
import { access, readdir } from 'fs/promises'

const list = async () => {
    // Write your code here 
    try {
        await access('files')
        const files = await readdir('files');
        for (const file of files) console.log(file);
    } catch(err) {
        throw new Error('FS operation failed')
    }
};

await list();