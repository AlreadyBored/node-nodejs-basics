import { createReadStream } from 'fs';

export const read = async () => {
   
    const readStream = await createReadStream('./files/fileToRead.txt');

    readStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readStream.on('data', (chunk) => {
        console.log(chunk.toString());
    })
};
