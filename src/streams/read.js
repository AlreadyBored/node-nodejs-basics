import fs from "fs";

const read = async () => {
  // Write your code here
  const fileToReadPath = "src/streams/files/fileToRead.txt";

  const readStream = fs.createReadStream(fileToReadPath);

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("end", () => {
    console.log("\nFinished reading file.");
  });

  readStream.on("error", (err) => {
    console.error(`Error reading file: ${err.message}`);
  });
};

await read();
