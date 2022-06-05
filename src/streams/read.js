import fs from "fs";

export const read = async () => {
  const readingStream = fs.createReadStream("./files/fileToRead.txt", "utf8");
  readingStream.on("data", (chunk) => {   
    process.stdout.write(chunk);
  })
};

read();


