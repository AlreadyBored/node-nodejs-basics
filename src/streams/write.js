import { createWriteStream  } from 'fs';
import path from "path";
import { pipeline } from 'stream';

const write = async () => {
    const filePath = path.join(process.cwd(), 'src/streams/files/fileToWrite.txt');
    const writeStream = createWriteStream(filePath);

    pipeline(process.stdin, writeStream, (error) => {
        if (error) {
            console.error(error.message);
        }
    });

    console.log('Please enter data (press Ctrl + C to finish):')
};

await write();