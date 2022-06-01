import { __dirname } from "./constants.js";
import { create } from "./create.js";
import { remove } from "./delete.js";
import { read } from "./read.js";
import { list } from "./list.js";
import { stdout } from "process";

const check = async () => {
  stdout.write(`\n ------CREATE THE FILE----- \n`);
  await create();
  stdout.write(`\n ------CREATE THE SAME FILE----- \n`);
  await create();
  stdout.write(`\n ------REMOVE THE FILE----- \n`);
  await remove();
  stdout.write(`\n ------REMOVE THE SAME FILE----- \n`);
  await remove();
  stdout.write(`\n ------READ THE FILE----- \n`);
  await read(); 
  stdout.write(`\n ------READ THE NOT EXISTING FILE----- \n`);
  await read("files/notExitingFile.txt");
  stdout.write(`\n ------THE LIST OF THE FILES----- \n`);
  await list();  
  stdout.write(`\n ------THE LIST OF THE FILES IN THE WRONG DIRECTORY----- \n`);
  await list("wrongDirectory");   
}; 

check();

