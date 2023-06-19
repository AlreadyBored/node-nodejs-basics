import fs from 'node:fs'
import fss from 'node:fs/promises'

const FILE_TO_READ = 'src/fs/files/fileToRead.txt'

const isFileToReadExists = fs.existsSync(FILE_TO_READ)

const read = async () => {
    if (!isFileToReadExists) throw new Error('FS operation failed')

    const test = await fss.readFile(FILE_TO_READ, 'utf-8')

    console.log(test)
};

await read();
