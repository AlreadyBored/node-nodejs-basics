import { stat,renameSync } from 'fs';

const rename = async () => {
    stat('./files/wrongFilename.txt', (err, stats) => {
        if (err == null){
            console.log('файл wrongFilename.txt существует')
            stat('./files/properFilename.md', (err, stats) => {
                if (err == null) throw new Error('FS operation failed');
                console.log('файл properFilename.md не существует')
            });
            renameSync('./files/wrongFilename.txt', './files/properFilename.md', (err) => {
                if (err) throw err;
                console.log('файл переименован')

            });
        }else {
            throw new Error('FS operation failed');
        }
    });
}
export default rename();