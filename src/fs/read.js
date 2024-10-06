import fs from "fs";
const read = async () => {
  fs.access("./files/fileToRead.txt", (error) => {
    if (error) {
      // fileToRead does not exist.
      throw new Error("FS operation failed");
    }
    fs.readFile("./files/fileToRead.txt", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  });
};

await read();
