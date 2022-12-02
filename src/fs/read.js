import fs  from 'fs';

const read = async () => {
    const file = 'src/fs/files/fileToRead.txt'
    fs.readFile(file, 'utf-8', function (err, content) {
        if (err) {
            throw new Error ('FS operation failed')
        } else {
            console.log(content);
        }
    })
};

await read();