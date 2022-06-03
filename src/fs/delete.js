import fs from "fs";
export const remove = async () => {
  try {
    fs.unlink("files/fileToRemove.txt", (err) => {
      if (err) throw new Error("FS operation failed");
      console.log("Deleted");
    });
  } catch (err) {
    console.log(err);
  }
};

remove();
