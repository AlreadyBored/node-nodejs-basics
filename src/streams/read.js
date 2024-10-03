import fs, { ReadStream } from 'fs'

const file = 'src/streams/files/fileToRead.txt'

const read = async () => {

    const readStream = fs.createReadStream(file);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('end', () => {
        console.log('\n');
        console.log(`${file} has been read successfully.`)
    })

    readStream.on('error', (err) =>{
        console.error("Stream operation failed", err);
    });

};

await read();