import { stat,unlink } from 'fs';

const remove = async () => {
    stat('./files/fileToRemove.txt', (err) => {
        if (err == null){
            unlink('./files/fileToRemove.txt', (err) => {
                if (err) throw new Error('FS operation failed');
                console.log('fileToRemove.txt was deleted');
            });
        }else {
            throw new Error('FS operation failed');
        }

    });
};
export default remove();
