export const create = async () => {
    // Write your code here
    const fs = require('fs');
    const content = "I am fresh and young"
    const path = "files/fresh.txt"

    if (fs.existsSync(path)){
        throw Error("FS operation failed");
    }

    fs.writeFile(path, content, err=>{
        if(err){
            console.error(err);
        }
    })
};