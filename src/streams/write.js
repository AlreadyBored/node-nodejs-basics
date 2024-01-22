import fs from "fs";

const write = async () => {
  try {
    const stream = fs.createWriteStream("src/streams/files/fileToWrite.txt");

    process.stdin.pipe(stream);

    stream.on("error", (error) => {
      console.error(`Error writing: ${error.message}`);
    });

    stream.on('open', () => console.log('Stream Open'));
    stream.on('close', () => console.log('Stream Close'));


  } catch (error) {
    console.error(`Error creating write stream: ${error.message}`);
  }
};

await write();