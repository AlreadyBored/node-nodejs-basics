import fs from "fs/promises";
import path from "path";

const pathToList = path.resolve("src", "fs", "files");

const list = async () => {
  // Write your code here
   try {
    const fileList = await fs.readdir(pathToList);
    console.log(fileList)
   } catch(err) {
    console.log(err);
    throw new Error("FS operation failed");
   }
};

await list();
