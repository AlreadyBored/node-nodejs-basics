import fs from 'fs';
import { pathToFileURL } from 'url';

const write = async () => {

  const path = pathToFileURL('./src/streams/files/fileToWrite.txt');

        function writeStdinToFile(filePath) {
          const writeStream = fs.createWriteStream(filePath);

          process.stdin.pipe(writeStream);

          process.stdin.on('end', () => {
            writeStream.end();
            console.log('Finished writing to file.');
          });

          writeStream.on('error', (error) => {
            console.error(`Error writing to the file: ${error.message}`);
          });
        }

        writeStdinToFile(path);
};

await write();