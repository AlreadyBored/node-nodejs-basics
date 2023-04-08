import fs from "fs";

const write = async () => {
  process.stdin.on("data", data => {
    data = data.toString();
    const writeable = fs.createWriteStream(
      './src/streams/files/fileToWrite.txt',
      {encoding: 'utf8'},
    );
    writeable.write(data);
  });
};

await write();