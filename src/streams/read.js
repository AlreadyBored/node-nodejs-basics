import * as fs from 'fs'

const fileLoc = "./src/streams/files/fileToRead.txt"

// Не работает когда пытаюсь исключительно стримами пишет. This file should be read using Streams API. Почему нельзя через пайп кинуть что-то process.stdp?
export const read = async () => {
    const readable = fs.createReadStream(fileLoc)
    readable.on("data", (dataChunk) => {
        process.stdout.write(dataChunk, () => {
            console.log("Успешно перенесено")
        })
    })
};
read()