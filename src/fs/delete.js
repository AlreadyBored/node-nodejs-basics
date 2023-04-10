import fs from 'fs';
import path from 'path';

const remove = async () => {
    const fileName = 'fileToRemove.txt';
    const filePath = path.join(new URL('./files/', import.meta.url).pathname, fileName);

    if (!fs.existsSync(filePath)) {
      throw new Error('FS operation failed: fileToRemove.txt does not exist');
    }
  
    fs.unlinkSync(filePath);
    console.log('File deleted successfully');
};

await remove();