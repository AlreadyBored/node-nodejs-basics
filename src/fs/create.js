import fs from 'fs';


const create = async () => {
    const filePath = new URL('./files/fresh.txt', import.meta.url).pathname;
    const content = 'I am fresh and young';
  
    try {
      // check if file already exists
      if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
      }
  
      // create new file with content
      fs.writeFileSync(filePath, content);
      console.log('File created successfully!');
    } catch (err) {
      console.error(err.message);
    }
};

await create();