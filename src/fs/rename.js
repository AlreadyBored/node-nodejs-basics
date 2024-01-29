import fs from "node:fs";

const rename = async () => {
  fs.access("src/fs/files/properFilename.md", fs.constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });
  fs.rename(
    "src/fs/files/wrongFilename.txt",
    "src/fs/files/properFilename.md",
    (err) => {
      if (err) throw new Error("FS operation failed");
    }
  );
};

await rename();
