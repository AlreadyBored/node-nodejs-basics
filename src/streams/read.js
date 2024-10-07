import fs from 'fs';
const __dirname = import.meta.dirname;

const read = async () => {
  const filePath = `${__dirname}/files/fileToRead.txt`
  const readStream = fs.createReadStream(filePath, 'utf-8');
  const chunks = [];

  readStream.on('readable', () => {
    let chunk;
    while ((chunk = readStream.read()) !== null) {
      chunks.push(chunk);
    }
  });

  readStream.on('end', () => {
    const content = chunks.join('');
    process.stdout.write(content);
  }); 

  readStream.on('error', (error) => console.log(error.message));
};

await read();
