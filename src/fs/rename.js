import fs from "fs";

const rename = async () => {
  fs.access("./files/wrongFilename.txt", function (error) {
    if (error) {
      // wrongFilename does not exist.
      throw new Error("FS operation failed");
    }
  });

  fs.access("./files/properFilename.md", function (error) {
    if (error) {
      fs.rename(
        "./files/wrongFilename.txt",
        "./files/properFilename.md",
        () => {
          console.log("File Renamed!");
        }
      );
      return;
    }
    // properFilename exists
    throw new Error("FS operation failed");
  });
};

await rename();
