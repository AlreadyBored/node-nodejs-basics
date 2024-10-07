import path from 'node:path';
import fs from 'node:fs';

const read = async () => {
    try {
        const pathRead = path.resolve('src', 'streams', 'files', 'fileToRead.txt');
        console.log('Resolved path:', pathRead);

        const rStream = fs.createReadStream(pathRead, { encoding: 'utf-8' });


        rStream.on('open', () => {
            console.log('Stream opened successfully.');
        });

        rStream.on('end', () => {
            console.log('Reading finished.');
        });

        rStream.on('error', (err) => {
            console.error('Error reading the file:', err);
        });

        rStream.pipe(process.stdout);

        process.stdout.on('error', (err) => {
            console.error('Error writing to stdout:', err);
        });

    } catch (err) {
        console.error('Error in read function:', err);
    }
};

await read();
