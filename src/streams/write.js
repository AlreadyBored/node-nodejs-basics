import fs from 'fs';
import path from 'path';
import { streamFilePath } from '../common/constants.js';

export const write = async () => {
    const writableStream = fs.createWriteStream(
      path.join(streamFilePath, 'fileToWrite.txt'),
      'utf-8'
    )
    process.stdin.pipe(writableStream);
};

write()