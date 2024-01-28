import { fs, getFilePath } from '../utils/fs.js';

const filePath = getFilePath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
    const fileStream = fs.createReadStream(filePath);

    fileStream.pipe(process.stdout);
    fileStream.on('end', () => {
        process.stdout.end('\n');
    });
};

await read();