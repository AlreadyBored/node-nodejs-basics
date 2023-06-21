import fs from "fs";

const rename = async () => {
  fs.stat("./src/fs/files/properFilename.md", (err, stats) => {
    if (stats) {
      throw Error("FS operation failed");
    } else {
     fs.rename( 
        "./src/fs/files/wrongFilename.txt",
        "./src/fs/files/properFilename.md",
        (err) => {
          if (err) throw Error("FS operation failed");
          console.log("Файл переименован");
        }
      );
    }
  });
};

await rename();
