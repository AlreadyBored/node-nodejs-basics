import fs from "fs";
const read = async () => {
    // Write your code here
    const readFilePath = './files/fileToRead.txt'

    // Create a readable stream
    const readable = fs.createReadStream(readFilePath, {encoding: 'utf-8'});
    let readData = '';

    const dataPromise = new Promise((resolve) => {

        // Add data to the readData, when it is available
        readable.on('data', (chunk) => {
            readData += chunk;
        });

        readable.on('end', () => {
            resolve();
        });
    });

    await dataPromise

    process.stdout.write(readData);
};

await read();