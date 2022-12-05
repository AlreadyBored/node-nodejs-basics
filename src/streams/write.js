import fs from 'node:fs'

const write = async () => {
  const input = fs.createWriteStream('src/streams/files/fileToWrite.txt');

  input.write(JSON.stringify(process.stdin))
};

await write().catch(err=>console.error(err));