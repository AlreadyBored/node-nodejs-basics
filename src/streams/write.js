import fs from 'fs';

const write = async () => {
    const path = './src/streams/files/fileToWrite.txt';
    const wStream = fs.createWriteStream(path);
    process.stdin.on('data', data => {
        data = data.toString();
        wStream.write(data);
    });
};

await write();