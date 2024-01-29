// implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
import { createReadStream } from 'node:fs'
import { Readable } from 'node:stream'

const read = async () => {
    const result =''
    const readable = createReadStream('./files/fileToRead.txt')
    readable.on('redable', (chunck) => {
        result += chunck
    })
    readable.on('end', () => console.log(result))
    readable.pipe(process.stdout)
};

await read();