import { __dirname } from "./constants.js";
import path from "path";
import { open } from "fs/promises";
import { stderr, stdout } from "process";
const defaultPath = "files/fresh.txt";

export const create = async (pathToFile) => {
  try {
    filehandle = await open(path.join(__dirname, pathToFile ?? defaultPath), "wx");
    await filehandle.write("I am fresh and young!"); 
    stdout.write(`\n File ${pathToFile ?? defaultPath} was created succesfully. \n`);
  }
  catch(error) {
    stderr.write(`ERROR>>> FS operation failed. \n ${error.message}`);
  }
  finally {
    filehandle?.close();
  };
};

create();