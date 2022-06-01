import path from "path";
import { rm } from "fs/promises";
import { __dirname } from "./constants.js";
import { stderr, stdout } from "process";

export const remove = async (pathToFile) => {
  try {
    await rm(path.join(__dirname, pathToFile ?? "files/fileToRemove.txt"));
    stdout.write(`\n File ${pathToFile ?? "files/fileToRemove.txt"} was removed succesfully.`)
  }
  catch(err) {
    stderr.write(`ERROR>>> FS operation failed. \n ${err.message}`);
  }
};