import * as fs from "fs";

const remove = async () => {
  fs.unlink("./files/fileToRemove.txt", (err) => {
    if (err?.code === "ENOENT") {
      console.log(err);
      throw new Error("FS operation failed");
    } else {
      console.log("The file has been deleted.");
    }
  });
};

await remove();
