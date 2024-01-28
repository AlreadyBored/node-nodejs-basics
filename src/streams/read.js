import { createReadStream } from 'node:fs';

import { getPath } from '../../utils/get.path.js';

const read = async () => {
    const pathToFile = getPath(import.meta.url, './files/fileToRead.txt');
    createReadStream(pathToFile, 'utf8').pipe(process.stdout);
};

await read();