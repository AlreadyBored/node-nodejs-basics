import fs from "fs";
import path from "path";

const read = async () => {
    // Write your code here
    // read.js - implement function that prints content of the fileToRead.txt into console
    // (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

    const file = path.resolve('src', 'fs', 'files', 'fileToRead.txt')

    try {
        if(!fs.existsSync(file)) throw new Error('FS operation failed')
        const data = await fs.promises.readFile(file, 'utf-8')
        console.log(data)
    } catch (e) {
        console.log(e)
        throw e
    }
};

await read();