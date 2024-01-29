import fs from "node:fs";

const create = async () => {
  fs.access("./src/fs/files/test.txt", fs.constants.F_OK, (error) => {
    if (error) {
      fs.appendFile(
        "./src/fs/files/test.txt",
        "I am fresh and young",
        (error) => {
          console.error(error);
        }
      );
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
