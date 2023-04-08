import fs from "fs";

const list = async () => {
  fs.readdir('./src/fs/files', (err, files) => {
    if (err) throw new Error('FS operation failed');
    console.log(files);
  });
};

await list();