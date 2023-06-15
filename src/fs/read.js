import fs from 'fs';

const read = async () => {
  try {
    const filePath = './files/fileToRead.txt';
    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist.');
    }
    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log(fileContent);
  } catch (error) {
    console.error('FS operation failed:', error.message);
  }
};

await read();