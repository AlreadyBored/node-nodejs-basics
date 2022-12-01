import fs from "fs";
import path from "path";

const read = async () => {
    // Write your code here
    // read.js - implement function that reads file fileToRead.txt content using
    // Readable Stream and prints it's content into process.stdout

    const file = path.resolve('src', 'streams', 'files', 'fileToRead.txt')
    const readStream = fs.createReadStream(file)
    readStream.pipe(process.stdout)
};

await read();