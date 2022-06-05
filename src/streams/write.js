import * as fs from 'fs'

const fileLoc = "./src/streams/files/fileToWrite.txt"

export const write = async () => {
    let wrightable = fs.createWriteStream(fileLoc)
    process.stdin.on("data", (chunk) => {
        wrightable.write(chunk, () => {
            console.log("Успешно перенесено")
        })
    })
};