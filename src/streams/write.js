import { createWriteStream } from "fs";

const write = async () => {
  const writeStream = createWriteStream("./files/fileToWrite.txt");

  writeStream.on('error', (error) => {
    console.error('Error writing to the file:', error.message);
  });

  process.stdin.pipe(writeStream);

  process.stdin.on('end', () => {
    writeStream.end();
    console.log('Finished writing to file.');
  });

  console.log('Start typing and press Ctrl+D to finish:');
};

await write();
