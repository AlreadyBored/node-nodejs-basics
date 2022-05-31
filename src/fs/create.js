'use strict'

const fsPromises = require( 'fs').promises
const path = require('path')

const freshFName = path.resolve(__dirname, './files/fresh.txt')

export const create = async () => {

    // Write your code here 
    try{

const fHandle = await fsPromises.open(freshFName, `ax`)
await fHandle.close()

// console.log(fHandle)

    } catch(e){
        console.log(e)
        if(e.code === `EEXIST`){
            throw new Error(`FS operation failed`)
        }

    }
};

// module.exports={create}