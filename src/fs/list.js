import fs from 'fs';

const list = async () => {
  const folderPath = './files';
  const isFolder = fs.existsSync(folderPath);

  if (isFolder) {
    const filesList = await fs.readdir(folderPath, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } else {
    throw new Error('FS operation failed');
  }
};

await list();
