import fsPromises from 'node:fs/promises';

const folderPath = 'src/fs/files';
const error = new Error('FS operation failed');

const list = async () => {
  try {
      const files = await fsPromises.readdir(folderPath);
      const trueFiles = [];
      await Promise.all(
        files.map(async (file) => {
          try {
            const isFile = (
              await fsPromises.stat(`${folderPath}/${file}`)
            ).isFile();
            if (isFile) {
              trueFiles.push(file);
            }
          } catch (e) {
            console.error(e);
          }
        })
      );
      console.log(trueFiles);
  } catch {
    throw error;
  }
};

await list();
