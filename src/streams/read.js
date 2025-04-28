import fs from 'fs';
import path from 'path';
import { stdout } from 'process';
import { pipeline } from 'stream';
const read = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');
    const readStream = fs.createReadStream(filePath);
    readStream.on('end', () => {console.log('\nFile read finished.');});

    pipeline(
        readStream,
        stdout,
        (err) => {}
    );
};

await read();