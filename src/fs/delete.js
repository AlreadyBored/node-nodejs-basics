import fs from 'fs'

export const remove = async () => {
    fs.rm('./src/fs/files/fileToRemove.txt', (err) => {
        if(err) throw new Error('Failde')
    })    
};

remove()