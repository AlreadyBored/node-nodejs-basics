import fs from "fs";
const list = async () => {
    // Write your code here
    fs.readdir("./files", (err, files)=>{
        if(err){
            console.error("FS operation failed");
            return
        }
        if(files){
            console.log(files);
        }
    }) 
};

await list();