import fs from 'fs';
const source = "./src/fs/files";
const destination = "./src/fs/files_copy";

 
// fs.cp(src, dest[, options], callback) = Asynchronously copies the entire directory structure from src to dest, including subdirectories and files.
// throws error if source don't exist by default
// error on exist throws error if destination exists

const copy = async () => {
        fs.cp(source, destination, {force:false, errorOnExist:true, recursive:true }, (err) => {
            if (err) {
                console.log("FS operation failed", err)
            } else {
                console.log("Copied")
            }
        } )
    
    }



await copy();
