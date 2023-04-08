import fs from "fs";

const remove = async () => {
  fs.unlink('./src/fs/files/fileToRemove.txt', (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

await remove();