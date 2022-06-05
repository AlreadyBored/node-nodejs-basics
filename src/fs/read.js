import fs from "fs";

export const read = async () => {
  fs.readFile("files/fileToRead.txt", "utf8", (error, content) => {
    if (error) throw new Error("FS operation failed");
    console.log(content);
  });
};

read();
