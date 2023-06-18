import fs from'fs';
let dir = './src/streams/files/fileToRead.txt'
let fileToWrite = './src/streams/files/process.stdout'

async function createProcess(readable) {
  for await (const chunk of readable) {
    fs.writeFileSync(fileToWrite, chunk)
  }
}

const read = async () => {
  const readableStream = fs.createReadStream(
    dir, {encoding: 'utf8'});

  await createProcess(readableStream);

};

await read();