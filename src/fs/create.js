import { appendFile, access, constants } from "node:fs";

const create = async () => {
  access("src/fs/files/fresh.txt", constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });
  appendFile("src/fs/files/fresh.txt", "I am fresh and young", function (err) {
    if (err) throw err;
  });
};

await create();
