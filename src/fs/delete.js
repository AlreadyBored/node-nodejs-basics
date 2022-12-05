import fs from 'fs/promises';
import { constants } from 'fs';

const remove = async () => {
    fs.access('./src/fs/files/fileToRemove.txt', constants.F_OK).then(() => {

        fs.unlink('./src/fs/files/fileToRemove.txt',function(err){
            if(err) return console.log(err);
            console.log('file deleted successfully');
       }); 

    }).catch(() => {
        console.log(new Error('FS operation failed'));
    });
};

await remove();