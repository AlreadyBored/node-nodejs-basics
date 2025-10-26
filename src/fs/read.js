import { promises as fs } from 'fs';


const read = async () => {
  try {
    const content = await fs.readFile('src/fs/files/fileToRead.txt', 'utf8')
    console.log(content)
  }
  catch (err){
    throw new Error('FS operation failed')
  }
};

await read();
