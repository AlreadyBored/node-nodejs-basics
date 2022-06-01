import { __dirname } from "./constants.js";
import path from "path";
import { open } from "fs/promises";
import { stderr } from "process";

export const create = async () => {
  let fileHandle;
  try {
    fileHandle = await open(path.join(__dirname, "files/fresh.txt"), "wx");
    await fileHandle.write("I am fresh and young!"); 
  }
  catch(error) {
    stderr.write(`ERROR>>> FS operation failed. \n ${error.message}`);
  }
  finally {
    fileHandle?.close();
  };
};