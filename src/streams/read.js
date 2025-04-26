import fs from 'fs';
import stream from 'stream';

const read = async () => {
    const readStream = fs.createReadStream('src/streams/files/fileToRead.txt', { encoding: 'utf8' });

    const data = stream.pipeline(readStream, process.stdout, (err) => {
        if (err) {
            console.log('Ошибка при обработке потока');
        }
    });
    console.log(data);
}

await read();
