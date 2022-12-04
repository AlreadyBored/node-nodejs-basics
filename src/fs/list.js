import fs from "node:fs/promises";
import path from "path";

// list.js - implement function that prints all array of filenames
// from files folder into console (if files folder doesn't exists
// Error with message FS operation failed must be thrown)

const list = async () => {
  // Write your code here

  try {
    const files = await fs.readdir(
      path.resolve(process.cwd(), "src", "fs", "files")
    );

    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
