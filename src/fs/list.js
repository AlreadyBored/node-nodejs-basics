import fs, {constants} from 'fs';

const folder = 'src/fs/files';

export const list = async () => {
    fs.access(folder, constants.F_OK, (err) => {
        if (err){
            throw new Error('FS operation failed');
        }else{
            fs.readdir(folder,(err, files)=>{
                files.map(file=>{
                    console.log(file);
                });
            });
        }
    });
};
list();