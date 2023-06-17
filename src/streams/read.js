//read.js- реализовать функцию, которая читает fileToRead.txt содержимое файла с помощью Readable Stream и печатает его содержимое в process.stdout
import fs from 'fs'
const read = async () => {
    const readableStream = fs.createReadStream('files/fileToRead.txt');
    readableStream.pipe(process.stdout);
}

await read();