import fs from "fs";

const copy = async () => {
  const dir = "files";
  const copiedDir = "files_copy";
  const error = Error("FS operation failed");
  fs.access(dir, fs.constants.F_OK, (err) => {
    if (err) {
      throw error;
    } else {
      fs.access(copiedDir, fs.constants.F_OK, (err) => {
        if (!err) throw error;
      });
      fs.cp(dir, copiedDir, { recursive: true }, (err) => {});
    }
  });
};

await copy();
