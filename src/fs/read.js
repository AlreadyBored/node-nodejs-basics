import fs from 'node:fs/promises'

const read = async () => {
  const text = await fs.readFile('./files/fileToRead.txt', {encoding:'utf-8'})
  console.log(text)
};

await read().catch((err)=>console.error('FS operation failed'));