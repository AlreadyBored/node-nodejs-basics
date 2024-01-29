import fs from 'fs';

const read = async () => {

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

    readFileContent('./src/streams/files/fileToRead.txt');

};

await read();