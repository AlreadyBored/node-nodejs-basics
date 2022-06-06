import * as fs from 'fs';
export const read = async () => {
      const readStream = fs.createReadStream('streams/files/fileToRead.txt')
        readStream.on('data', (chunk)=>{
            process.stdout.write(chunk.toString())
        })
};
read()
