import { __dirname } from "./constants.js";
import { create } from "./create.js";
import { remove } from "./delete.js";
import { stdout } from "process";

const cancelChanges = async () => {
    stdout.write(`\n ------CANCELING CHANGES----- \n`);
    await create("files/fileToRemove.txt");
    await remove("files/fresh.txt");
    stdout.write(`\n All the changes were canceled. \n`);  
};

cancelChanges();