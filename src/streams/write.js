import fs from 'fs';
import path from 'path';

const write = async () => {
    const folderPath = 'src/streams/files';
    const filePath = path.join(folderPath, 'fileToWrite.txt');
    const stream = fs.createWriteStream(filePath);

    process.stdin.pipe(stream);

    stream.on('error', (error) => {
        throw error;
    });
};

await write();
