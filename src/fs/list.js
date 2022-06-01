import { __dirname } from "./constants.js";
import { readdir } from "fs/promises";
import path from "path";
import { stderr, stdout } from "process";

export const list = async (dirPath) => {
  const pathToDir = dirPath ?? "files";
  try {
    const filesList = await readdir(path.join(__dirname, pathToDir));
    stdout.write(`\n The directory ${pathToDir} contains: \n`)
    filesList.forEach(fileName => stdout.write(`\t ${fileName} \n`))   
  }
  catch(err) {
    stderr.write(`\n ERROR>>> FS operation failed. \n ${err.message} \n`)
  } 
};

//list();
//list("wrongDirectory")