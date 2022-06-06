import fs from "fs";

export const write = async () => {
  const readableStream = fs.createReadStream('./files/fileToRead.txt');
  const writeStream = fs.createWriteStream("./files/fileToWrite.txt");
  readableStream.setEncoding("utf8");

  readableStream.on("data", (chunk) => {
    writeStream.write(chunk)
    
  });
};

write()
