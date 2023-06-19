import fs from 'fs'

const write = async () => {
    const filePath = new URL('files/fileToWrite.txt', import.meta.url)
    const writeableStream = fs.createWriteStream(filePath)

    process.stdin.on('data', data => {
        writeableStream.write(data.toString())
        process.exit();
    });
};

await write();