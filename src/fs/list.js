import fs from "fs";

const list = async () => {
    // Write your code here
    

    // I output list of names, because didnt get explanation how it must looks, like array of names or list of names. In anyway if necessary, i can implement it lika a array of names.
  if (fs.existsSync("./files")) {
    const files = fs.readdirSync("./files");

    files.forEach((file) => {
      console.log(file);
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await list();
