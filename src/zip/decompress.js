import zlib from 'zlib'
import fs from 'fs'

export const decompress = async () => {
    const existPath = ('./files/archive.gz')
    const createPath = ('./files/fileToCompress.txt')
    const gzip = zlib.createGunzip();  

    const readStream = fs.createReadStream(existPath);
    const writeStream = fs.createWriteStream(createPath);  
  
    readStream.pipe(gzip).pipe(writeStream)
  
    
    const deleteFile = (file) => {
        fs.unlink(file, function (err) {
            if (err) {
                console.error(err.toString());
            } else {
                console.warn(file + ' deleted');
            }
        }
    )}
    
        deleteFile(existPath);
 
};

decompress()