import { join } from "path";
import {
  writeFile,
  constants,
  access,
  cp,
  rename,
  unlink,
  readdir,
  readFile,
} from "fs";

const createPath = (...subs) => {
  return join(...subs);
};

const isSrcExist = (fullPath) => {
  return new Promise((res) => {
    access(fullPath, constants.F_OK, (error) => {
      res(!error);
    });
  });
};

const createFile = async (path, content) => {
  return new Promise((res, rej) => {
    writeFile(path, content, (err) => {
      if (err) rej(err);
      res();
    });
  });
};

const copyDirectory = async (sourcePath, targetPath) => {
  return new Promise((res, rej) => {
    cp(sourcePath, targetPath, { recursive: true }, (err) => {
      if (err) rej(err);
      res();
    });
  });
};

const renameFile = async (oldPath, newPath) => {
  return new Promise((res, rej) => {
    rename(oldPath, newPath, (err) => {
      if (err) rej(err);
      res();
    });
  });
};

const deleteFile = async (path) => {
  return new Promise((res, rej) => {
    unlink(path, (err) => {
      if (err) rej(err);
      res();
    });
  });
};

const readDirectory = async (path) => {
  return new Promise((res, rej) => {
    readdir(path, (err, files) => {
      if (err) rej(err);
      res(files);
    });
  });
};

const FORMAT_TYPE = {
  utf8: "utf8",
};

const readFileContent = async (path, formatType = FORMAT_TYPE.utf8) => {
  return new Promise((res, rej) => {
    readFile(path, formatType, (err, content) => {
      if (err) rej(err);
      res(content);
    });
  });
};

export const utilsService = {
  createFile,
  createPath,
  isSrcExist,
  copyDirectory,
  renameFile,
  deleteFile,
  readDirectory,
  readFileContent,
  FORMAT_TYPE,
};
