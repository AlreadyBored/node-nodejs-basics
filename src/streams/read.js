import fs from'fs';
let dir = './src/streams/files/fileToRead.txt'
let fileToWrite = './src/streams/files/process.stdout'

const read = async () => {
  let readableStream = fs.readFileSync(dir,'utf8');
  fs.writeFileSync(fileToWrite, readableStream)
};

await read();