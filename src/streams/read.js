import fs from 'fs';
import { pathToFileURL } from 'url';

const read = async () => {

  const path = pathToFileURL('./src/streams/files/fileToRead.txt');

    function readFileContent(filePath) {
      const readStream = fs.createReadStream(filePath);

      readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
      });

      readStream.on('error', (error) => {
        console.error(`Error reading the file: ${error.message}`);
      });

      readStream.on('end', () => {
        console.log('\nEnd of file.');
      });
    }

    readFileContent(path);

};

await read();