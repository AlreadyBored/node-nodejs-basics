import fs from "fs";

const read = async () => {
  // Write your code here
  const readStream = fs.createReadStream("./files/fileToRead.txt");
  readStream.setEncoding("utf8");
  readStream.on("data", (data) => {
    //console.log(data);
    process.stdout.write(data + "\n");
  });
  readStream.on("error", (error) => {
    console.log(error.stack);
  });
};

await read();
