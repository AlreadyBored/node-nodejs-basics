import fs from 'fs'
export const read = async () => {
    let readerStream = fs.createReadStream('files/fileToRead.txt')
    process.stdout.write(readerStream);
};

read()