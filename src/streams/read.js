import fs from "fs";

const read = async () => {
  const readableStream = fs.createReadStream("./files/fileToRead.txt", "utf8");

  readableStream.on("error", function (error) {
    console.log(`error: ${error.message}`);
  });

  readableStream.pipe(process.stdout);
};

await read();
