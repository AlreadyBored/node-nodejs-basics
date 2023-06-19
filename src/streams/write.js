import  Stream from 'stream'
import process from 'process'
import fs from 'fs';

const path = "./src/streams/files/fileToWrite.txt";

const write = async () => {
    
    if (!fs.existsSync(path))
        throw new Error("The path does not exist!!!");
    
    const file = fs.createWriteStream(path);
    process.stdin.setEncoding("utf-8");
    process.stdin.on("readable", () => {
        var input = process.stdin.read();
        if (input !== null) {
            
            file.write(input + "");
            file.end();

        }else {
            process.stdout.write(input);
        }
    });

};

await write();
