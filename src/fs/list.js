import fs from "fs";

const list = async () => {
    fs.readdir("./src/fs/files_copy", (err, items) => {
        if (err) throw Error('FS operation failed');

        console.log(items);
      });
};

await list();