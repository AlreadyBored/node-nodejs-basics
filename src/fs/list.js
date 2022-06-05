import { stat,readdir } from 'fs';

const list = async () => {
    stat('./files', (err,) => {
        if (err == null) {
            readdir('./files', (err, files) => {
                for (let i=0; i<files.length; i++) {
                    console.log(i+' - '+files[i]);
                }
            });
        }else{
            throw new Error('FS operation failed')
        }
    });
};
export default list();