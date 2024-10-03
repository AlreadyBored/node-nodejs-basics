
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