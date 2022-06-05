import zlib from 'zlib'
import fs from 'fs'

export const compress = async () => {
    const existPath = ('./files/fileToCompress.txt')
    const createPath = ('./files/archive.gz')
    const gzip = zlib.createGzip();  

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

    readStream.on("close", function () {
        readStream.destroy(); 
        deleteFile(existPath);
    });   
   
};

compress()
