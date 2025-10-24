import fs from 'node:fs/promises';
const create = async () => {
  const fileName = 'fresh.txt';
  const fileContent = 'I am fresh and young';
  
  try {
    await fs.access(fileName);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(fileName, fileContent);
      console.log(`${fileName} created successfully with content.`);
    } else {
      throw err;
    }
  }
};

await create();
