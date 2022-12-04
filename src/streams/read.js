import {createReadStream} from 'node:fs'
import {stdout} from 'node:process';

const read = async () => {

    const path = './src/streams/files/fileToRead.txt';
    const stream = createReadStream(path);
    let body = '';

    stream.on('readable', () => {
        let data;

        while ((data = stream.read()) !== null) {
            body += data.toString()
        }

    });

    stream.on('end', () => {
        stdout.write(body);
    });


};

await read();