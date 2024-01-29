import {createReadStream} from 'node:fs';
import process from 'node:process';

const read = async () => {
    const file = "./src/streams/files/fileToRead.txt";
    const input = createReadStream(file);
    input.on("data", function(text){ 
        process.stdout.write(text.toString() + '\n');
    });
}

await read();