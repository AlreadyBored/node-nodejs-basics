import { createReadStream, } from 'fs'
const stream = createReadStream('./src/streams/files/fileToRead.txt', 'utf8')

const read = async () => {
    // Write your code here 
    let data = ''
    stream.on('data', chunk => {
        data += chunk
    })
    stream.on('end', () => process.stdout.write(data))
    stream.on('error', (err) => console.log(err.message))
};

await read();

