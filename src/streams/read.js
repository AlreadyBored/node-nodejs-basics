import { createReadStream } from 'node:fs';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const readPath = getNecessaryPathInCurrentDir(import.meta.url, '/files/fileToRead.txt');

const read = async () => {
    const rs = createReadStream(readPath);

    rs.on('data', (data) => {
        process.stdout.write(data);
    });
};

await read();
