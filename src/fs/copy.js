"use strict";

import fs from "fs";
import path from "path";

export const copy = async () => {
  const folderPath = "files";
  const newPath = "files_copy";

  fs.mkdir(path.resolve(newPath), (error) => {
    if (error) throw new Error("FS operation failed");

    fs.readdir(folderPath, (err, files) => {
      if (err) throw new Error("Не могу скопировать");
      else {
        files.forEach((item) => {
          fs.copyFile(
            `${folderPath}/${item}`,
            `${newPath}/${item}`,
            (error) => {
              if (error) throw new Error("Не могу скопировать файл!");
            }
          );
        });
      }
    });
  });
};

copy();
