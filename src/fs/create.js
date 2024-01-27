import fs  from 'node:fs';

const folderName = 'src/fs/files';
const fileName = `${folderName}/fresh.txt`;
const content = 'I am fresh and young';
const err = new Error('FS operation failed');

const create = async () => {
  try {
    await fs.promises.stat(fileName);
    throw err;
  } catch (e) {
    if (e.code === 'ENOENT') {
      try {
        await fs.promises.writeFile(fileName, content);
      }  catch (writeError) {
        console.error(writeError);
      }
    } else {
      console.error(e);
    }
  }
};

await create();
