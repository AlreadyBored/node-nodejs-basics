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
    const table = {}
      await Promise.all(trueFiles.map(async (f, i) => {
      const stats = await fsPromises.stat(`${folderPath}/${f}`);
      table[i + 1] = {name: f, size: stats.size + ' KB', createdOn: stats.birthtime.toISOString().split('T')[0]};
    }));
    console.table(table);
  } catch {
    throw error;
  }
};

await list();
