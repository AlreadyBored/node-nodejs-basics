import fs from 'fs';

const remove = async () => {
  fs.access('src/fs/files/fileToRemove.txt', (error) => {
    if (error) {
      throw new Error("FS operation failed")
    } else {        
      fs.unlink('src/fs/files/fileToRemove.txt', (err) => {
            if (err) {
              console.error(err);
            }
            console.log("File was removed");
          });
    }
});
};

await remove();