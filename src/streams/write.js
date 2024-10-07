/*
* implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
*/
import fs from "fs";

const write = async () => {
    const filePath = "./src/streams/files/fileToWrite.txt";

    process.stdin.on('data', dataToWrite => { 
        const writeStream = fs.createWriteStream(filePath);
        writeStream.write(dataToWrite, 'utf8', (err) => {
            if (err) {
              console.error('Error writing to file:', err);
            } else {
              console.log('Data has been written to the file.');
              writeStream.end();
            }
            process.exit();
        });
    });
};

await write();