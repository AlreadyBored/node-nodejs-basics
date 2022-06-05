import { readFile } from "fs";

async function makeTask(path) {
    readFile(path, "utf8", (error, data) => {
        try {
            if (error) throw new Error('FS operation failed');
            console.log(data);
        } catch (error) { console.error(error.message) }
    });
}

const path = 'src/fs/files/fileToRead.txt';

export const read = async () => {
    // Write your code here 
    makeTask(path);
};