import { open } from 'node:fs/promises';

// read.js - implement function that reads file fileToRead.txt content
// using Readable Stream and prints it's content into process.stdout

const read = async () => {
    // Write your code here
    const pathToFile = './files/fileToRead.txt';

    const fd = await open(pathToFile);
    const stream = fd.createReadStream();

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    stream.on('end', () => {
        console.log();
    });

    stream.on('error', (err) => {
        console.error('Error occurred', err.message);
    });
};

await read();
