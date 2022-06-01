import { __dirname } from "./constants.js";
import { create } from "./create.js";
import { remove } from "./delete.js";
import { rename } from "./rename.js";
import { stdout, stderr } from "process";
import { rm } from "fs/promises";

const cancelChanges = async () => {
    stdout.write(`\n ------CANCELING CHANGES----- \n`);
    await create("files/fileToRemove.txt");
    await remove("files/fresh.txt");
    await rename("files/properFilename.txt", "files/wrongFilename.txt");
    await remove("files/renamedFile.txt");
    try {
      await rm(`${__dirname}/files_copy`, { recursive: true });  
    }
    catch(err) {
      stderr.write(`\n ERROR>>> FS operation failed. \n ${err.message} \n`);
    }
    stdout.write(`\n All the changes were canceled. \n`);  
};

cancelChanges();