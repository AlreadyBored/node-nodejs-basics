import { stderr, stdout } from "process";
import { open } from "fs/promises" ;
import path from "path";
import { __dirname } from "./constants.js";

export const read = async () => {
  try {
    const filehandle = await open(path.join(__dirname, "files", "fileToRead.txt"), "r");
    const text = await filehandle.readFile();
    stdout.write(`\n ${text} \n`);
  }
  catch(err) {
    stderr.write(`\n ERROR>>> FS operation failed. \n ${err.message} \n`) 
  }
};