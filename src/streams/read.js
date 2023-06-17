import { createReadStream } from 'node:fs';

const read = async () => {
    const readableStream = createReadStream('src/streams/files/fileToRead.txt');

    readableStream.on('data', (chunk) => {
      process.stdout.write(chunk.toString());
    })

    readableStream.on('end', () => {
      process.stdout.write('\n');
      process.stdout.write('Finished reading file');
      process.stdout.write('\n');
    })
};

await read();
