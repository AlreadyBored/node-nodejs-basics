import fs from "fs";

const copy = async () => {
  // Write your code here
    if (fs.existsSync("files") && !fs.existsSync("files_copy")) {
        const files = fs.readdirSync("./files");
        fs.mkdirSync("./files_copy", () => {});
        files.forEach((file) => {
          fs.copyFileSync(`./files/${file}`, `./files_copy/${file}`);
        });
  
  } else {
    throw new Error("FS operation failed");
  }
};

await copy();
