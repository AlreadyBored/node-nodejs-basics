import {existsSync} from "node:fs";
import {renameSync} from "fs";

const rename = async () => {
    // Write your code here
    const oldFilePath = './files/wrongFilename.txt';
    const newFilePath = './files/properFilename.md';

    if(existsSync(newFilePath)){
        throw new Error('FS operation failed');
    }
    renameSync(oldFilePath,newFilePath);
};

await rename();