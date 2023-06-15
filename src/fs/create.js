import fs from 'fs';
import path from 'path';

const create = async () => {
    const folderPath = 'files';
    const filePath = path.join(folderPath, 'fresh.txt');
    if (fs.existsSync(filePath)) {
      throw new Error('File already exists.');
    }
    const fileContent = 'I am fresh and young';
    fs.writeFileSync(filePath, fileContent);
    console.log('File created successfully.');
};

await create();