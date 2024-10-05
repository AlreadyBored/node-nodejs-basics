import { createWriteStream } from 'fs';
import path from 'path';

const write = async () => {
    const filePath = path.join('files', 'fileToWrite.txt');
    const fileStream = createWriteStream(filePath);

    process.stdin.pipe(fileStream);

    // fileStream.on('error', (err) => {
    //     console.error('Error occurred:', err);
    // });

    // fileStream.on('finish', () => {
    //     console.log('Data has been written to fileToWrite.txt');
    // });
};

await write();
