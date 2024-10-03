import { createReadStream, createWriteStream } from 'fs';

const transform = async () => {
  // const readStream = createReadStream(process.stdin);
  
  process.stdin.pipe(process.stdout)
};

await transform();