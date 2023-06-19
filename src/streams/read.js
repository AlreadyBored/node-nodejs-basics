import fs from 'fs';


const read = async () => {
    const fileToReadPath = './files/fileToRead.txt'

    const readStream = await fs.createReadStream(fileToReadPath,{ encoding: 'utf-8' })

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    });
};

await read();