import { existsSync as exists } from 'fs';
import fsAsync from 'fs/promises'

const fileToRead = `${import.meta.dirname}/files/fileToRead.txt`;

const read = async () => {
    if (!exists(fileToRead)) {
        throw Error('FS operation failed');
    }

    const content = await fsAsync.readFile(fileToRead, { encoding: 'utf8' });
    console.log(content);
};

await read();