import fs from "fs";

const read = async () => {
  const readable = fs.createReadStream(
    './src/streams/files/fileToRead.txt',
    {encoding: 'utf8'},
  );
  readable.on('data', function (chunk) {
    process.stdout.write(chunk.toString() + '\n');
  });
};

await read();