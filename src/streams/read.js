import {createReadStream} from 'fs'

const read = async () => {
        const stream =  createReadStream('./src/streams/files/fileToRead.txt')
        let data = ''
        stream.on('data', chunk => data += chunk)
        stream.on('end', () => process.stdout.write(data))
        stream.on('error', error => console.log('Error', error.message))
};

await read();