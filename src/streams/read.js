import { open } from 'fs/promises'
import { stdout } from 'process';

const read = async () => {
    try {
        const fh = await open('files/fileToRead.txt')
        const rs = fh.createReadStream('utf8')
        rs.pipe(stdout)
    } catch(err) {
        fh.close()
        throw new Error(err)
    }
};

await read();