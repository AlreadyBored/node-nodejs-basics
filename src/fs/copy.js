import fs, {constants} from 'fs';
import path from 'path';

const sourceFolder = 'src/fs/files';
const destinationFolder = 'src/fs/files_copy';

export const copy = async () => {
    fs.access(sourceFolder, constants.F_OK, (err) => {
        if (err){
            throw new Error('FS operation failed');
        }else{
            fs.access(destinationFolder, constants.F_OK, (err) => {
                if (err){
                    fs.mkdir(destinationFolder, (err) => {
                        if (err){
                            throw new Error(err);
                        }else{
                            fs.readdir(sourceFolder,(err, files)=>{
                                files.map(file=>{
                                    fs.copyFile(path.join(sourceFolder, file), path.join(destinationFolder, file), (err) => {
                                        if (err) throw new Error(err);
                                      });
                                });
                            });
                        }
                      });
                    
                }else{
                    throw new Error('FS operation failed');
                }
            });
        }
    });
};
copy();