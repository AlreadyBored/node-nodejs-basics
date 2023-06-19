import fs from 'fs';
import {FILE_TO_READ_TXT} from '../constants/fileNames.js';
import getPath from '../utils/getPath.js';

const read = async () => {
    const filePath = getPath(import.meta.url, '/files/', FILE_TO_READ_TXT);
    const readStream = fs.createReadStream(filePath, 'utf-8');

    return readStream.on('data', (dataChunk) => {
        process.stdout.write(dataChunk);
    });
};

await read();