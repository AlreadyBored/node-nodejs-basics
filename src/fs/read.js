import { readFile } from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const read = async () => {
    const source = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
    const errorMessage = 'FS operation failed';

    return readFile(source, { encoding: 'utf8' }).then(
        (fileName) => console.log(fileName),
        () => { throw new Error(errorMessage); }
    );
};

await read();
