import path from 'path'
import fs from 'fs'

export const read = async () => {
    const stream= fs.createReadStream(path.resolve('src','streams','files','fileToRead.txt'),{encoding:'utf-8'})
    stream.on('data',(chunk)=>{
        process.stdout.write(chunk)
    })
};
read()