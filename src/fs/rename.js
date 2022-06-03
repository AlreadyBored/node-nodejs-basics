import fs from "fs";
export const rename = async () => {
  try {
    // if (fs.existsSync("./files/properFilename.md")) throw new Error("FS operation failed");
    fs.access("./files/properFilename.md", function (err) {
      if (!err) {
        throw new Error("FS operation failed");
      }

      fs.rename(
        "./files/wrongFilename.txt",
        "./files/properFilename.md",
        (err) => {
          if (err) throw new Error("FS operation failed");
        }
      );
    });
  } catch (e) {
    console.log(e);
  }
};
rename();
