import { __dirname } from "./constants.js";
import path from "path";
import { rename as renameFile, open } from "fs/promises";
import { stderr, stdout } from "process";
const defaultOldName = "files/wrongFilename.txt";
const defaultNewName = "files/properFilename.txt";


export const rename = async (oldName, newName) => {
  try {
    const filehandle = await open(path.join(__dirname, newName ?? defaultNewName), "wx"); 
    await filehandle?.close();
    await renameFile(path.join(__dirname, oldName ?? defaultOldName), path.join(__dirname, newName ?? defaultNewName));
    stdout.write(`\n File ${oldName ?? defaultOldName} was renamed to ${newName ?? defaultNewName}. \n`);
  }
  catch(err) {
    stderr.write(`\n ERROR>>> FS operation failed. \n ${err.message} \n`);
  }; 
};

rename();