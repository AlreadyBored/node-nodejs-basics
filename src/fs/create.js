'use strict'

const fsPromises = require( 'fs/promises')
const path = require('path')
const freshLine = `I am fresh and young`

const freshFName = path.resolve(__dirname, './files/fresh.txt')

export const create = async () => {

    // Write your code here 
    try{

const fHandle = await fsPromises.open(freshFName, `ax`)
await fHandle.write(freshLine)
await fHandle.close()


    } catch(e){
        if(e.code === `EEXIST`){
            throw new Error(`FS operation failed`)
        }

    }
};

// module.exports={create}