import fs from 'fs'
import path from 'path'

const create = async () => {
  // Write your code here
  //create.js - implement function that creates new file fresh.txt with content
  // I am fresh and young inside of the files folder
  // (if file already exists Error with message FS operation failed must be thrown)

  const file = path.resolve('files', 'fresh.txt')

  try {
    await fs.promises.writeFile(file, 'I am fresh and young', {encoding: 'utf-8', flag: 'wx'})
  } catch (e) {
    throw new Error('FS operation failed')
  }

};

await create();

