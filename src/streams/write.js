import { createWriteStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const pathToFile = path.resolve(__dirname, "files", "fileToWrite.txt");

  const writeStream = createWriteStream(pathToFile);

  writeStream.on('error', (error) => {
    console.error('Error writing to the file:', error.message);
  });

  process.stdin.pipe(writeStream);

  process.stdin.on('end', () => {
    writeStream.end();
    console.log('Finished writing to file.');
  });

  console.log('Start typing and press Ctrl+D to finish:');
};

await write();
