import fs from 'fs';
import { stdin, stdout } from 'process';

const write = async () => {
    let writer = fs.createWriteStream('src/streams/files/fileToWrite.txt');
    stdout.write('Please enter text to save in a file or press ctrl+C to exit\n');
    stdin.on('data', data => {
      writer.write(data);
    });
    process.on('SIGINT', () => {
      process.exit();
    });
};

await write();