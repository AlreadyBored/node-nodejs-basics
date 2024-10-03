import fs from 'fs'
const file = 'src/streams/files/fileToWrite.txt'

const write = async () => {

    const writeStream = fs.createWriteStream(file);

    let data = '';


    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    });

    process.stdin.on('end',  () => {
        writeStream.end();
    });

    writeStream.on('error', (err) => {
        console.error("Stream operation failed", err);
    } )

 

};


await write();