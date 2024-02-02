import { createReadStream, createWriteStream } from 'node:fs';
import { stdout } from 'node:process';
import { rename as renameFile, access, constants, unlink } from 'node:fs/promises';
import path from 'node:path'





export const read = async (dir,file) => {
    // Write your code here 
    try {
        const fileToRead = await createReadStream(file)
        await fileToRead.pipe(stdout)
        fileToRead.on('end', () => {
            console.log();
        });
    }catch(err){
        
            console.error('operation failed')
        
    }
};

export const create = async (dir,file) => {
    createWriteStream(file)
}

export const rn = async (dir,arg,argTwo) => {
    try {
        const exists = await access(argTwo, constants.F_OK);
        if(exists === undefined){
            throw new Error('FS operation failed')
        }
    } catch(err){

        if(err.code === 'ENOENT'){
            let pathToFile = path.resolve(arg)
            let dir = path.dirname(pathToFile)
            
            await renameFile(pathToFile,`${dir}/${argTwo}`)
        }else{
           
            throw new Error('FS operation failed')
        }
        
    }

};

export const copy = async (dir,argOne,argTwo) => {
    let pathToFile = path.resolve(argOne)
    let fileName = path.basename(pathToFile)
    let destPath = path.resolve(argTwo)
    const fileToCopy = await createReadStream(pathToFile)
    const destFile = await createWriteStream(`${destPath}/${fileName}`)
    fileToCopy.pipe(destFile)
}


export const move = async (dir,argOne,argTwo) => {
    let pathToFile = path.resolve(argOne)
    let fileName = path.basename(pathToFile)
    let destPath = path.resolve(argTwo)
    const fileToCopy = await createReadStream(pathToFile)
    const destFile = await createWriteStream(`${destPath}/${fileName}`)
    await fileToCopy.pipe(destFile)
    await unlink(pathToFile)
}

export const remove = async (dir,argOne,argTwo) => {
    let pathToFile = path.resolve(argOne)
    
    await unlink(pathToFile)
}