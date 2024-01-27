import fs from "fs";

const create = async () => {
  const content = "I am fresh and young";
  const path = "files/fresh.txt";
  const error = Error("FS operation failed");
  fs.access(path, fs.constants.F_OK, (err) => {
    if (!err) {
      throw error;
    } else fs.writeFile(path, content, (err) => {});
  });
};
await create();
