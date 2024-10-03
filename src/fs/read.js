// implement function that prints content of the fileToRead.txt 
// into console (if there's no file fileToRead.txt 
// Error with message FS operation failed must be thrown)
import { access, readFile } from 'fs/promises'

const read = async () => {
    try {
        await access('files/fileToRead.txt')
        await readFile('files/fileToRead.txt', 'utf8').then((data) => console.log(data))
    } catch(err) {
        throw new Error('FS operation failed')
    }
};

await read();