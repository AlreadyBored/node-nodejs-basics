import { __dirname } from "./constants.js";
import path from "path";
import { cp, readdir } from "fs/promises";
import { stderr, stdout } from "process";
const defaultSrcPath = "/files";
const defaultDestPath = "/files_copy";

export const copy = async (srcPath, destPath) => {
  try {
    await cp(path.join(__dirname, srcPath ?? defaultSrcPath), path.join(__dirname, destPath ?? defaultDestPath), { errorOnExist: true, recursive: true, force: false });
    stdout.write(`\n Files were copied from ${srcPath ?? defaultSrcPath} to ${destPath ?? defaultDestPath}. \n`);
  }
  catch(error) {
    stderr.write(`\n ERROR>>> FS operation failed. \n ${error.message} \n`);
  };
};

//copy();
//copy("/notExistingDir", "notExistingDirToo");