// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import { appendFile } from 'node:fs'
import { Writable } from 'node:stream'

const write = async () => {
    const writable = new Writable({
        write(chunk, encoding, callback) {
            if(chunk !== null) {
                appendFile('./files/fileToWrite.txt', chunk, (err) => err && console.log(err))
                callback()
            }
        }
    })
    process.stdin.pipe(writable)
};

await write();