import fs from "fs";

const copy = async () => {
  fs.access("./files", function (error) {
    if (error) {
      // files does not exist.
      throw new Error("FS operation failed");
    }
  });

  fs.access("./files_copy", function (error) {
    if (error) {
      fs.cp("./files", "./files_copy", { recursive: true }, (err) => {
        if (err) {
          console.error(err);
        }
        console.log("Copied");
      });
      return;
    }
    // files_copy exists
    throw new Error("FS operation failed");
  });
};

await copy();
