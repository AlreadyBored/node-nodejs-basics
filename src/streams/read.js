import {createReadStream} from 'fs';
import {HELPER} from '../fs/modules/helpers.mjs'

const read = async () => {
    const filePath = HELPER.getDirPath(import.meta.url) + '/files/fileToRead.txt'
    createReadStream(filePath).on('data', (ch) => {process.stdout.write(ch)})
};

await read();