import fs from 'fs';

const write = async () => {
    // create writeable stream
    const writeableStream = fs.createWriteStream('./files/fileToWrite.txt', {
        encoding: 'utf8',
    });

    // handle data event and write chunks to 'fileToWrite.txt' file
    process.stdin.on('data', (chunk) => writeableStream.write(chunk));
};

await write();
