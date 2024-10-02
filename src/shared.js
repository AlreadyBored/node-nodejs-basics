import fs from "fs";

export const isFileExist = async (file) =>
  new Promise((resolve) => {
    fs.access(file, fs.constants.F_OK, (err) => {
      resolve(!err); // resolve `true` if file exists, `false` if it doesn't
    });
  });
