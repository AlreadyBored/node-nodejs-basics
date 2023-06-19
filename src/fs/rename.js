import { rename as setName, access, constants } from 'fs/promises';
import __dirname from './pathGenerator/pathGenerator.js';

const rename = async () => {
    let destUrl = `${__dirname}files/properFilename.md`;
    let err_status = 0;
    await access(destUrl, constants.F_OK, (err) => {
        //console.log("success") 
    }).then(async ()=>{
        err_status = 1;
        throw new Error();
    }).catch(async (err)=>{
        if(err_status){
            throw new Error("FS operation failed");
        } 
        else{
            await setName(`${__dirname}files/wrongFilename.txt`, destUrl, () => {
                //console.log("success") 
            }).catch(err => {
                if (err.code === 'ENOENT') {
                    throw new Error('FS operation failed');;
                }
                throw err;
            })
        } 
    })
}

await rename();