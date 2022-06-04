import fs from 'fs'

export const create = async () => {
    const fileContent = 'I am fresh and young';
    const errMessage = 'FS operation failed';
    fs.writeFile(
        './src/fs/files/fresh.txt',
        fileContent,
        {flag: 'wx'},
        (err) => {
          if(err) throw new Error(errMessage)
    })
};

create()