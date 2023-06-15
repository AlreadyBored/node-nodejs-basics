import fs from 'node:fs';

const read = async () => {
    // Write your code here
   await fs.readFile("src/fs/files/fileToRead.txt", (error, data) => {
       if(error){
           throw new Error("FS operation failed")
       }
        console.log(data.toString())
    })
};

await read();