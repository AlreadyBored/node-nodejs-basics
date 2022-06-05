import fs from 'fs';


export const remove = async () => {
    const path = './files/fileToRemove.txt'

    try {
        fs.unlinkSync(path)
      } catch(err) {
        console.log('FS operation failed')
      }
};

remove()


