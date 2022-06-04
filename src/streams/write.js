import fs from 'fs';

export const write = async () => {
    const path = './files/fileToWrite.txt';
    let writeStream = new fs.WriteStream(path);

    // process.stdin.on('data', data => {
    //     stream.write(data);
    //     process.exit();
    // });

    process.stdin.pipe(writeStream);
};