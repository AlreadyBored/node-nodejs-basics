import fs from 'fs';
import path from 'path';
import { streamFilePath } from '../common/constants.js';

export const read = async () => {
    const readStream = fs.createReadStream(
      path.join(streamFilePath, 'fileToRead.txt'),
      'utf-8'
    )

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })
};

read()