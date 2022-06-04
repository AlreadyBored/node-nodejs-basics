export const copy = async () => {
    // Write your code here
    const fs = require('fs');
    const content = "I am fresh and young"
    const dir_copy_name = "files_copy"
    const dir_origin_name = "files"

    if (fs.existsSync(dir_copy_name)){
        throw Error("FS operation failed");
    }

    fs.mkdir(dir_copy_name);

    let list_of_files = fs.readdir(dir_origin_name);
    list_of_files.forEach(item =>{
        fs.copyFile(dir_origin_name + "/" + item, dir_copy_name + "/" + item)
    });
};