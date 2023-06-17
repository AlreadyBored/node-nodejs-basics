import { createReadStream } from 'fs';

const read = async () => {
  try {
    const stream = createReadStream('./files/fileToRead.txt', 'utf8');
    
    let data = ''
    stream.on('data', chunk => {
        data += chunk
    })
    stream.on('end', () => process.stdout.write(data))
    stream.on('error', (error) => console.log(error.message))
  } catch (error) {
    console.error('FS operation failed:', error.message);
  }
};

await read();
