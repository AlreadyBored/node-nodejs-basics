import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';

const write = async () => {
    const output = createWriteStream('src/streams/files/fileToWrite.txt');
    console.log('Print something, that will be in the fileToRead.txt. Ctr+C - exist from print mode.')
    stdin.on('data', data =>{
        output.write(data)
    })
};

await write();