import fs from "fs";

const copy = async () => {
  fs.stat("./src/fs/files", (err, stats) => {
    if (stats) {
      throw Error("FS operation failed");
    }
  });
  fs.mkdir("./src/fs/files_copy", (err) => {
    if (err) {
      throw Error("FS operation failed");
    } else {
      fs.readdir("./src/fs/files", (err, items) => {
        if (err) {
          console.log(err);
        }

        for (var i = 0; i < items.length; i++) {
          fs.copyFile(
            "./src/fs/files/" + items[i],
            "./src/fs/files_copy/" + items[i],
            (err) => {
              if (err) console.log(err);
              console.log("Файл успешно копирован");
            }
          );
        }
      });
    }
  });
};

await copy();
