import fs from 'fs'
export const read = async () => {
   const readStream = fs.createReadStream('./files/fileToRead.txt', 'utf8');
   readStream.on('data', (chunk) => {
       process.stdout.write(chunk.toString())
   })
};
read();