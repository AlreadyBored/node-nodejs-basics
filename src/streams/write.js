import fs from 'fs';
import process from 'process';
const write = async () => {
   const ws = fs.createWriteStream('src/streams/files/fileToWrite.txt')
   process.stdin.pipe(ws)
};

await write();