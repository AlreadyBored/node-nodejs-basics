import { createReadStream } from 'node:fs';

const read = async () => {
    // Write your code here 
    try {
        const readFile = './src/streams/files/fileToRead.txt';

        const readStream = createReadStream(readFile, 'utf-8');

        readStream.on('readable', () => {
            const data = readStream.read();
            if (data) {
                process.stdout.write(data);
                process.stdout.write('\n');
            }
        });
    } catch (error) {
        console.log(error.message); 
    }

};

await read();