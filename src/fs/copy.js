import { stat,mkdir,constants,copyFile,readdir } from 'fs';

const copy = async () => {
    stat('./files_copy', (err, stats) => {
        if (err ==null) throw new Error('FS operation failed');
        if (err.code === 'ENOENT'){
            mkdir('./files_copy', { recursive: true }, (err) => {
                if (err) throw err;
            });
            console.log('Папка создана, копирование файлов...')
            readdir('./files', (err,files)=>{
                files.forEach((item) => {
                    let { COPYFILE_EXCL } = constants;
                    copyFile('./files/'+item, './files_copy/'+item, COPYFILE_EXCL, err => {
                        if(err) throw err; // не удалось скопировать файл. Он уже существует?
                        console.log('Файл '+item+' успешно скопирован');
                    });
                });
            });
        }else{
            throw new Error('FS operation failed')
        };
    });
};

export default copy();