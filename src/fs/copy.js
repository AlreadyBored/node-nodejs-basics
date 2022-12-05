import fsPromises from "fs/promises"
import fs from "fs"
import { exit } from 'process'

const source = "./src/fs/files"
const destination = "./src/fs/files_copy"

const copy = async () => {
    // Write your code here 
    fs.access(source, function(err) {
        if (err) {
            try {
                throw new Error("FS operation failed")
            } catch (error) {
                console.error(error.message)
                exit(0)
            }          
        }
    })
    fs.access(destination, async function(err) {
        if (!err) {
            try {
                throw new Error("FS operation failed")
            } catch (error) {
                console.error(error.message)
            }
            exit(0)
        } else {
            fsPromises.mkdir(destination)
            copyFiles(source, destination)
        }
    })

    
           
};

async function copyFiles(source, destination) {
    fs.readdir(source, { withFileTypes: true }, async (err, files) => {
        if (err)
            console.error(err);
        else {
            for await (const file of files) {
                if (file.isFile()) {
                    await fsPromises.copyFile(source + "/" + file.name, destination + "/" + file.name, 2);
                }
                else {
                    await fsPromises.mkdir(destination + "/" + file.name, { recursive: true });
                    await copyFiles(source + "/" + file.name, destination + "/" + file.name);
                }
            }
        }
    })
};

copy();