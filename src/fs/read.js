import fs from "fs";

const read = async () => {
  const targetPath = new URL("./files/fileToRead.txt", import.meta.url);
  fs.access(targetPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.readFile(targetPath, "utf8", (err, data) => {
        if (err) {
          throw new Error("FS operation failed");
        } else {
          console.log(data);
        }
      });
    }
  });
};

await read();
