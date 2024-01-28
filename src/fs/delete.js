//delete.js- реализовать функцию, которая удаляет файл fileToRemove.txt(если нет файла fileToRemove.txt Errorс сообщением, FS operation failed нужно выкинуть)
import fs from 'fs'
const remove = async () => {
    try {
        await fs.promises.unlink('files/fileToRemove.txt')
        console.log('file is removed')
    } catch (err) {
        console.error('FS operation failed')
    }
};

await remove();