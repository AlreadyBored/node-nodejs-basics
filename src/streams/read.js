import fs from 'fs';

const read = async () => {
    // Write your code here
    const readable = fs.createReadStream("files/fileToRead.txt");
 
    (async () => {
    for await (const chunk of readable) {
        process.stdout.write(chunk.toString());
    }
    })();
};

await read();