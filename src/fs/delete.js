import { unlink } from 'fs';


const remove = async () => {
    try {
    unlink('src/fs/files/fileToRemove.txt', (err) => {
      if (err) throw new Error('FS operation failed');
    }); 
} catch (error) {
    console.error(error);
}
};

await remove();