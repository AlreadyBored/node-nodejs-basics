import { readFileSync } from 'fs';
const read = async () => {
    const fileWhatRead = './files/fileToRead.txt';
    try {
        const data = readFileSync(fileWhatRead, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

await read();

/*
* implement function that prints content
* of the fileToRead.txt into console
* (if there's no file fileToRead.txt
* Error with message FS operation failed must be thrown)
*
* */
