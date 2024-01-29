import * as fs from "fs";

const read = async () => {
  fs.readFile("./files/fileToRead.txt", (err, data) => {
    if (err?.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      if (data) {
        console.log(data.toString());
      }
    }
  });
};

await read();
