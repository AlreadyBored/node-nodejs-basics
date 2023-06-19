import fs from 'fs';
import {FILE_TO_WRITE_TXT} from '../constants/fileNames.js';
import getPath from '../utils/getPath.js';

const write = async () => {
    const filePath = getPath(import.meta.url, '/files/', FILE_TO_WRITE_TXT);

    const writableStream = fs.createWriteStream(filePath, 'utf-8');

    process.stdin.on('data', (data) => {
        writableStream.write(data);
    });
};

await write();