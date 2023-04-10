import fs from 'fs';

const list = async () => {
    const filesPath = new URL('./files/', import.meta.url).pathname;

  if (!fs.existsSync(filesPath)) {
    throw new Error('FS operation failed: files directory does not exist');
  }

  const files = fs.readdirSync(filesPath);

  console.log('Files in the files directory:');
  files.forEach(file => console.log(file));
};

await list();