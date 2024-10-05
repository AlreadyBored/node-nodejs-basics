// implement function that writes process.stdin data into file fileToWrite.txt 
// content using Writable Stream

import { open } from 'fs/promises'
import { stdin } from 'process'
const write = async () => {
    try {
        const fh = await open('files/fileToWrite.txt', 'w')
        const ws = fh.createWriteStream()
    
        stdin.pipe(ws)
    } catch(err) {
        fh.close()
        throw new Error(err)
    }
};

await write();