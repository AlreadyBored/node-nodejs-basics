import fs from "fs";

const read = async (filename) => {
  const readStream = fs.createReadStream(filename);

  readStream.on("error", (err) => console.log(`Something error: ${err}`));
  readStream.on("open", () => console.log("\nOpen writable stream"));
  readStream.on("end", () => console.log("\nClose writable stream"));

  readStream.pipe(process.stdout);
};

await read("src/streams/files/fileToRead.txt");
