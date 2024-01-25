import fs from 'fs';

const read = async () => {
    const filePath = 'src/fs/files/fileToRead.txt'
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) throw new Error('FS operation failed');
    });
    fs.readFile(filePath, 'utf8', (err, content) => {
       if (err) throw err;
       console.log(content);
    });
};

await read();
