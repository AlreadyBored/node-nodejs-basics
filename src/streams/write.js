import fs from 'fs';
import stream from 'stream';

const write = async () => {
    const writeStream = fs.createWriteStream('src/streams/files/fileToWrite.txt');

    stream.pipeline(process.stdin, writeStream, (err) => {
        if (err) {
            console.log('Ошибка при записи файла:');
        }
    });
};

await write();
