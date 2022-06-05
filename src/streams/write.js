import fs from 'fs'
import path from "path";

export const write = async () => {
    process.stdin.setEncoding('utf8');
    console.log('Введите сообщение в консоли которое нужно написать')
    let writable = fs.createWriteStream(path.resolve('src','streams','files','fileToWrite.txt'),{encoding:'utf-8'})
    process.stdin.on('readable', () => {
        let text = process.stdin.read();
        if (!text) return
        writable.write(""+text)
    });
};
write()