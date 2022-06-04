import fs from 'fs';

export const write = async () => {
    const path = './files/fileToWrite.txt';
    let stream = new fs.WriteStream(path);

    process.stdin.on('data', data => {
        stream.write(data);
        process.exit();
    });
};