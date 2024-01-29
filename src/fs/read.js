import fs from 'fs'
const read = async () => {
  fs.readFile('src/fs/files/fileToRead.txt', 'utf8' ,(err, data) => {
    if(err) throw new Error('FS operation failed')
    else console.log(data)
  })
};

await read();
