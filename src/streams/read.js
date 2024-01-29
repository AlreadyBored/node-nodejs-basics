import { createReadStream } from 'node:fs';
import path from 'node:path';

const read = async () => {
    const file = path.join(process.cwd(), 'src/streams/files/fileToRead.txt');
    const myReadStream = createReadStream(file);

    myReadStream.on('data', function (chunk) {
        process.stdout.write(chunk);
    });

    myReadStream.on('error', function (err) {
        console.error(err);
    });
};

await read();
