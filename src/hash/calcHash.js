import { promises as fs } from "fs";
import { createHash } from 'node:crypto'
import { getDirName, fileExists } from "../utils/utils.js";

const calculateHash = async () => {
    const path = getDirName(import.meta.url) + "/files/fileToCalculateHashFor.txt";
    const exists = await fileExists(path);

    try{
        if(!exists) {
            throw new Error('File not found.')
        } else {
            const data = await fs.readFile(path, {encoding: 'utf-8'})
            console.log(createHash('sha256').update(data).digest('hex'));
        }
    } catch(err) {
        console.log(err)
    }
};

await calculateHash();