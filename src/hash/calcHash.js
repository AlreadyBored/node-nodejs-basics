import crypto  from 'crypto';
import { readFile } from "fs";
const hasher = crypto.createHash('sha256');
const path = 'files/fileToCalculateHashFor.txt'
export const calculateHash = async () => {
    // Write your code here 
    readFile(path, "utf8", (error, data) => {
        try {
            if (error) throw new Error('FS operation failed');
            const hashString = hasher.update(data).digest("hex");
            console.log(hashString);
        } catch (error) { console.error(error.message) }
    });
};


