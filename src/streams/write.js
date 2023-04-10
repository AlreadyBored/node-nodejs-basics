import fs from 'fs';

const write = async () => {
    // Create writeable stream
    const writeableStream = fs.createWriteStream('./files/fileToWrite.txt', {
        encoding: 'utf8',
    });

    // Handle data event and write chunks to the 'fileToWrite.txt' file
    process.stdin.on('data', (chunk) => writeableStream.write(chunk));
};

await write();
