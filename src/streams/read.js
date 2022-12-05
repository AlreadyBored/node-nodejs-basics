import { createReadStream, } from 'fs'
import { stdin, stdout } from 'process'
const stream = createReadStream('./src/streams/files/fileToRead.txt', 'utf8')

const read = async () => {
    // Write your code here 
    let data = ''
    stream.on('data', chunk => {
        data += chunk
    })
    stream.on('end', () => console.log(data))
    stream.on('error', error => console.log('Error', error.message));

};

await read();

