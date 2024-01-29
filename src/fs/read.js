import * as fs from 'fs';

const errorMessage = 'FS operation failed';

const read = async () => {0
    await fs.promises.readFile('src/fs/files/fileToRead.txt', {encoding: 'utf8'})
        .then((data) => console.log(data))
        .catch(() => console.log(errorMessage));
};

await read();