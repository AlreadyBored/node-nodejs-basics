import fs from "fs";
export const write = async () => {
  try {
    let writeableStream = fs.createWriteStream("./files/fileToWrite.txt", {
      flags: "w",
    });
    writeableStream.on("error", () => {
      throw new Error("FS operation failed");
    });
    process.stdin.pipe(writeableStream);
  } catch (e) {
    console.log(e);
  }
};

write();
