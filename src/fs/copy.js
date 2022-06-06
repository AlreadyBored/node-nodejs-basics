import fs from "fs";

export const copy = async () => {
  fs.stat("./files", (err) => {
    if (!err) throw Error('FS operation failed');
  });
  fs.mkdir("./files_copy", (err) => {
    if (err) {
        throw Error('FS operation failed');
    } else {
      fs.readdir("./files", (err, items) => {
        if (err) {
          console.log(err);
        }

        for (var i = 0; i < items.length; i++) {
          fs.copyFile(
            "./files/" + items[i],
            "./files_copy/" + items[i],
            (err) => {
              if (err) console.log(err);
              console.log("Файл успешно перемещён");
            }
          );
        }
      });
    }
  });
};

copy();
