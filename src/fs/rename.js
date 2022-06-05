import fs from "fs";

export const rename = async () => {
  const wrongFileName = "files/wrongFilename.txt";
  const properFileName = "files/properFilename.md";

  fs.access(properFileName, (error) => {
    if (!error) throw new Error("FS operation failed");

    fs.rename(wrongFileName, properFileName, (error) => {
      if (error) throw new Error("FS operation failed");
    });
  });
};

rename();
