import * as fs from 'fs';


export const write = async () => {
    // Write your code here 
    // console.log(process.stdin);

    try {

        
        const file = fs.createWriteStream('src/streams/files/fileToWrite.txt');
        process.stdin.pipe(file);
    } catch {

    }
}


write()