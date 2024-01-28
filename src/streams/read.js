import { pipeline } from 'stream/promises';
import { createReadStream } from 'fs';
const read = async () => {
    const file = './files/fileToRead.txt';
    try {
        await pipeline(createReadStream(file), process.stdout);
    } catch (err) {
        console.error(err);
    }
};

await read();

/*
* read.js - implement function that reads file fileToRead.txt content using Readable Stream
*  and prints its content into process.stdout
* */
