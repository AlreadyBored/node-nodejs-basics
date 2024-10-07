import fs from 'fs';
const __dirname = import.meta.dirname;

const write = async () => {
  const filePath = `${__dirname}/files/fileToWrite.txt`
  const writeStream = fs.createWriteStream(filePath, 'utf-8');

  process.stdin.on('readable', () => {
    let chunk; 
    while ((chunk = process.stdin.read()) !== null) { 
      writeStream.write(chunk);
    } 
  });

  process.stdin.on('end', () => {
    writeStream.end();
  });

  writeStream.on('error', (error) => console.log(error.message));
};

await write();
