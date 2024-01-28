import { createWriteStream } from 'node:fs';

import { getPath } from '../../utils/get.path.js';

const write = async () => {
    const pathToFile = getPath(import.meta.url, './files/fileToWrite.txt');

    const writeStream = createWriteStream(pathToFile, { flags: 'a'});
    process.stdin.pipe(writeStream);
};

await write();