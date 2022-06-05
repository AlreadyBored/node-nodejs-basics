import * as fs from 'fs';

export const read = async () => {
    // Write your code here 

    let reader = fs.createReadStream("src/streams/files/fileToRead.txt");
    reader.on('data', function (chunk) {
        // console.log(chunk.toString());
        process.stdout.write(chunk)
    });
};

read()