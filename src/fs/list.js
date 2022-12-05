//6
import fs from 'fs';

const list = async () => {
    const message = 'FS operation failed';
    const filename = './fs/files';

    try {
        if(fs.existsSync(filename)){
            fs.readdir(filename, (err, data) => {
                if (err) throw console.log(message);
                console.log(data);
            });
        } else throw new Error(message);
      } catch (err) {
        console.log(message);
     }
};

await list();