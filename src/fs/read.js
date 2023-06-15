//read.js- реализовать функцию, выводящую содержимое fileToRead.txtв консоль (если нет файла fileToRead.txt Errorс сообщением, FS operation failedто нужно кинуть)
import fs from 'fs'
const read = async () => {
    try {
        const data = await
            fs.promises.readFileSync('files/fileToRead.txt', 'utf-8')
        console.log(data)
    } catch (err) {
        console.error('FS operation failed')
    }

}

await read();