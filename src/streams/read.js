import fs from 'fs';

const read = async () => {
    const fileName = 'fileToRead.txt';

    const readStream = fs.createReadStream(`./files/${fileName}`, { encoding: 'utf8' });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('error', (err) => {
        throw new Error(`FS operation failed: ${err.message}`);
    });

    readStream.on('end', () => {
        console.log('\n');
        console.log('File reading completed successfully!');
    });
};

await read();
