//write.js реализовать функцию, которая записывает process.stdinданные в fileToWrite.txtсодержимое файла, используя Writable Stream
import fs from 'fs'
const write = async () => {
    const writeStream = fs.createWriteStream('files/fileToWrite.txt');
    process.stdin.pipe(writeStream);
};

await write();