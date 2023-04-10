import { createWriteStream } from 'fs';
import { stdin } from 'process';
import path from 'path';

const __dirname = path.resolve();
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStream = createWriteStream(filePath);
    
    stdin.on('data', data => {        
        writeStream.write(data.toString());        
    }); 
};

await write();