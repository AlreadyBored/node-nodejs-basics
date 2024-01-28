import fs from "fs";

const path = "files/fresh.txt";

const create = async () => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      fs.appendFile(path, "I am fresh and young", (err) => {
        console.log(err);
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
