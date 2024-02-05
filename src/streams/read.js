// implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToReadPath = path.resolve(__dirname, 'files', 'fileToRead.txt');
    
    const readableStream = createReadStream(fileToReadPath);
    readableStream.on('data', (chunck) => process.stdout.write(chunck));
    readableStream.on('end', () => process.stdout.write('\n'));
};

await read();

const read2 = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToReadPath = path.resolve(__dirname, 'files', 'fileToRead.txt');
    
    const readableStream = createReadStream(fileToReadPath);
    readableStream.on('end', () => process.stdout.write('\n'));

    await pipeline(
        readableStream,
        process.stdout
    );
};

// await read2();