import * as fs from "fs";

const copy = async () => {
  fs.cp(
    "./files",
    "./files_copy",
    {
      recursive: true,
      errorOnExist: true,
      force: false,
    },
    (err) => {
      if (err?.code === "ERR_FS_CP_EEXIST") {
        throw new Error("FS operation failed");
      } else {
        console.log("Files has been copied successfully.");
      }
    }
  );
};

await copy();
