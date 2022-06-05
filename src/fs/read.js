import {readFile,stat} from "fs";

const read = async () => {
    stat('./files/fileToRead.txt', (err,) => {
        if (err == null) {
            readFile('./files/fileToRead.txt', 'utf8', (err, data) => {
                if (err) throw err;
                console.log(data);
            });
        }else{
            throw new Error('FS operation failed')
        }

    });
};

 export default read();