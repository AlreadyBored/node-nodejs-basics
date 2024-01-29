import fs from 'fs';

const write = async () => {

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

        writeStdinToFile('./src/streams/files/fileToWrite.txt');
};

await write();