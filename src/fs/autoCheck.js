import { __dirname } from "./constants.js";
import { create } from "./create.js";
import { remove } from "./delete.js";
import { read } from "./read.js";
import { stdout } from "process";

const check = async () => {
  stdout.write(`\n ------CREATE THE FILE----- \n`);
  await create();
  stdout.write(`\n ------REMOVE THE FILE----- \n`);
  await remove();
  stdout.write(`\n ------READ THE FILE----- \n`);
  await read();    
}; 

check();

