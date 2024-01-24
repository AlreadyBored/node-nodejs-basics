import fs from "node:fs";

const filePath = "./files/fileToRemove.txt";
const fsOperationFailedErrorMessage = "FS operation failed";

const remove = async () => {
  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      throw err.code === "ENOENT"
        ? new Error(fsOperationFailedErrorMessage)
        : err;
    }

    fs.rm(filePath, (err) => {
      if (err) throw err;
      console.log("File removed successfully");
    });
  });
};

await remove();
