import fs from 'fs';
import path from 'path';

const create = async () => {
  const currentFilePath = new URL(import.meta.url).pathname;
  const dirname = path.dirname(currentFilePath);
  const folderPath = path.join(dirname, 'files');
  const filePath = path.join(folderPath, 'fresh.txt');
  const fileContent = 'I am fresh and young';

  fs.open(filePath, 'wx', (err, fileDescriptor) => {
    if (err) {
      throw new Error(`FS operation failed: ${err.message}`);
    }

    fs.writeFile(fileDescriptor, fileContent, (writeErr) => {
      if (writeErr) {
        fs.close(fileDescriptor, () => {
          throw new Error(`FS operation failed: ${writeErr.message}`);
        });
      }

      fs.close(fileDescriptor, () => {
        console.log('A new file has been created successfully.');
      });
    });
  });
};

await create();
