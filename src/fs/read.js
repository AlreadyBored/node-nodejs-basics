import fs from 'fs';

const read = async () => {
    // Write your code here
    fs.access('files/fileToRead.txt', (err) => {
        if (err) {
            throw Error ('FS operation failed');
        }
        fs.readFile('files/fileToRead.txt', 'utf-8', (err, data) => {
            if (err) {
              return err;
            }
            console.log(data)
          })
    })
};

await read();