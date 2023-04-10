import fs from 'fs';

const read = async () => {
    const fileName = 'fileToRead.txt';
    const filePath = new URL(`./files/${fileName}`, import.meta.url).pathname;
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`FS operation failed: ${fileName} does not exist`);
  }
  
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  console.log(fileContent);
};

await read();