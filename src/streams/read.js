
import fs from 'fs';

const read = async () => {
    const path = './src/streams/files/fileToRead.txt';
    const rStream = fs.createReadStream(path);
    let contents = '';
    rStream.on('data', chunk => {
        contents += chunk.toString();
        process.stdout.write(`${contents}\n`);
    });
};

await read();