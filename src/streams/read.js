import fs from 'fs';
import path from 'path';

const read = async () => {
    const folderPath = 'src/streams/files';
    const filePath = path.join(folderPath, 'fileToRead.txt');
    const stream = fs.createReadStream(filePath);

    let data = '';

    stream.on('data', (chunk) => {
        data += chunk;
    });

    stream.on('end', () => {
        process.stdout.write(data);
    });

    stream.on('error', (error) => {
        throw error;
    });
};

await read();
