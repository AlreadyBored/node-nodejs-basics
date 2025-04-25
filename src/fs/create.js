import { writeFile, access } from 'fs/promises';
const create = async () => {
    let content = 'I am fresh and young'
    try {
        await access('src/fs/files/fresh.txt');
        throw new Error('FS operation failed: File already exists');
      } catch (error) {
        if (error.code === 'ENOENT') {
          await writeFile("src/fs/files/fresh.txt", content);
          console.log('File created successfully');
        } else {
          throw new Error('FS operation failed');
        }
      }
};

await create();