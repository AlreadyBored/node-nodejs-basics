//rename.js- реализовать функцию, которая переименовывает файл wrongFilename.txt в properFilename с расширением .md(если файла нет wrongFilename.txt или он properFilename.mdуже существует , Errorсообщение FS operation failedдолжно быть выброшено)
import fs from 'fs';
const rename = async () => {
    try {
        const data = fs.promises.rename("./files/wrongFilename.txt", "./files/properFileName")
        console.log('Файл успешно переименован', data)
    } catch (error) {
        throw error
    }
};

await rename()