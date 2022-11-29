import {readdir, mkdir, copyFile, constants} from "node:fs";
import {fileURLToPath} from "node:url"

const copy = async () => {
    // Write your code here
    const pathToDir = fileURLToPath(new URL("./files", import.meta.url))
    await readdir(pathToDir,async (err, files)=>{
        if(!err){
            await mkdir("files_copy", async (err)=> {
                if(!err){
                    for (let i = 0; i < files.length; i++) {
                        const pathToFile = fileURLToPath(new URL(`./files/${files[i]}`, import.meta.url))
                        const pathToFileClone = fileURLToPath(new URL(`./files_copy/${files[i]}`, import.meta.url))
                        await copyFile(pathToFile, pathToFileClone, constants.COPYFILE_EXCL, (err)=> {
                            if(err) throw new Error("FS operation failed")
                            else console.log("Operation succesful");
                        })
                    }
                }else{
                    throw new Error("FS operation failed")
                }
            })
        }else{
            throw new Error("FS operation failed")
        }
    });
};

copy();