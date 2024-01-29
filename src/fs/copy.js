import { access, constants, cp } from "node:fs";

const copy = async () => {
  // Write your code here
  access("src/fs/files", constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
  access("src/fs/files_copy", constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });
  cp("src/fs/files", "src/fs/files_copy", { recursive: true }, (err) => {
    if (err) throw err;
  });
};

await copy();
