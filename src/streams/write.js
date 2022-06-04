import * as fs from 'fs';
export const write = async () => {
   const writeStream = fs.createWriteStream('streams/files/fileToWrite.txt')
   process.stdin.on('data', data => {
      const text = data.toString()
      writeStream.write(text)
   })
   };
write()