import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkIsFileExist = (...pathEl) => {
  return new Promise((res) => {
    fs.access(path.join(__dirname, ...pathEl), fs.constants.F_OK, (err) => {
      if (err) {
        res(false);
      }

      res(true);
    });
  });
};

const createFileWithText = (message, ...pathEl) => {
  return new Promise((res, rej) => {
    fs.writeFile(path.join(__dirname, ...pathEl), message, (err) => {
      if (err) {
        rej(err);
      }

      res("File has been created");
    });
  });
};

const createFolder = (...pathEl) => {
  return new Promise((res, rej) => {
    fs.mkdir(path.join(__dirname, ...pathEl), {}, (err) => {
      if (err) {
        rej(err);
      }

      res("Folder has been created!");
    });
  });
};

const copyFile = (fromPath = [], toPath = []) => {
  return new Promise((res, rej) => {
    fs.copyFile(
      path.join(__dirname, ...fromPath),
      path.join(__dirname, ...toPath),
      (err) => {
        if (err) {
          rej(err);
        }

        res();
      }
    );
  });
};

const getFilesFromFolder = (...pathEl) => {
  return new Promise((res, rej) => {
    fs.readdir(path.join(__dirname, ...pathEl), {}, (err, files) => {
      if (err) {
        rej(err);
      }

      res(files);
    });
  });
};

const renameFile = (oldPath, newPath) => {
  return new Promise((res, rej) => {
    fs.rename(
      path.join(__dirname, ...oldPath),
      path.join(__dirname, ...newPath),
      (err) => {
        if (err) {
          rej(err);
        }

        res();
      }
    );
  });
};

const deleteFile = (...pathEl) => {
  return new Promise((res, rej) => {
    fs.rm(path.join(__dirname, ...pathEl), (err) => {
      if (err) {
        rej(err);
      }

      res();
    });
  });
};

const readFromFile = (...pathEl) => {
  return new Promise((res, rej) => {
    fs.readFile(
      path.join(__dirname, ...pathEl),
      { encoding: "utf8" },
      (err, data) => {
        if (err) {
          rej(err);
        }

        res(data);
      }
    );
  });
};

export {
  checkIsFileExist,
  createFileWithText,
  createFolder,
  copyFile,
  getFilesFromFolder,
  renameFile,
  deleteFile,
  readFromFile,
};
