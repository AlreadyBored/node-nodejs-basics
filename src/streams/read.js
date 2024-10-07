import fs from 'fs';
const read = async () => {
    // Write your code here 
    const filePath = new URL('files/fileToRead.txt', import.meta.url);

    //Read the file
    const fileStream = fs.createReadStream(filePath);

    fileStream.on('data', (data) => {
        process.stdout.write(data.toString());
    });

    fileStream.on('end', () => {
       console.log();
    });
};

await read();