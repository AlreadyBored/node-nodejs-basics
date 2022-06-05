import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  const filesPath = __dirname + "/files";
  const filesCopyPath = __dirname + "/files_copy";

  fs.exists(filesPath, (exist) => {
    if (!exist) throw "FS operation failed";
    fs.exists(filesCopyPath, (exist) => {
      if (exist) throw "FS operation failed";
      fs.mkdir(filesCopyPath, () => {
        fs.readdir(filesPath, (err, data) => {
          data.forEach((file) => {
            fs.readFile(filesPath + `/${file}`, (err, data) => {
              fs.writeFile(filesCopyPath + `/${file}`, data, (err) => {
                console.log(`${file} writed`);
              });
            });
          });
        });
      });
    });
  });
};

copy();
