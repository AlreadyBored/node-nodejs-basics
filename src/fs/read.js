import fs from 'fs/promises'

const read = async () => {
  try {
  const filePath = 'src/fs/files/fileToRead.txt'
  let fileContent = await fs.readFile(filePath, "utf-8");
  console.log(fileContent);
  } catch (error) {
    throw new Error('FS operation failed')
  }
}

await read()
