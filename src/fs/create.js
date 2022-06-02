import * as fs from 'fs/promises';
  
export const create = async () => {
  const path = './src/fs/files/fresh.txt';
  const filePath = './src/fs/files';
  const content = 'I am fresh and young';
  const fileName = 'fresh.txt';
  try {
    const files = await fs.readdir(filePath);
    const exist = files.find((file) => file === fileName);
    if (exist) {
      throw new Error('FS operation failed');
    } else {
      await fs.appendFile(path, content);
      console.log('File fresh.txt created');
    }
  } catch (error) {
    console.log(error);
  }
};

create();
