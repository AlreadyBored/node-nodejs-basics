import fsPromises from 'node:fs/promises';

const folderPath = 'src/fs/files';
const error = new Error('FS operation failed');

const rename = async () => {
  try {
  await fsPromises
    .readdir(folderPath)
    .then((arr) => arr.map(async (name) =>  {
      if (
        name === 'properFilename.md' ||
        (!arr.includes('wrongFilename.txt') &&
          !arr.includes('properFilename.md'))
      ) {
        throw error;
      }
      else if (name === 'wrongFilename.txt')
          await fsPromises.rename(
            `${folderPath}/${name}`,
            `${folderPath}/properFilename.md`
          );
    }));
  } catch {
    throw new Error (error)
  }
};

await rename();
