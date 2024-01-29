import { createReadStream } from 'fs';
import { stdout } from 'process';

const read = async () => {
    const fileToRead = 'src/streams/files/fileToRead.txt';
    const readStream = createReadStream(fileToRead, 'utf-8')
    readStream.on('data', function(chunk) {
        stdout.write(chunk)
    })
};

await read();