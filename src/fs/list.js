import fs from "fs";

export const list = async () => {
    fs.readdir("./files", (err, items) => {
        if (err) throw Error('FS operation failed');

        console.log(items);
      });
};
list()