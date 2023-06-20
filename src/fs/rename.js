const rename = async () => {
    var fs=require('fs');
    var current_file="src/fs/files/wrongFilename.txt";
    var new_name="src/fs/files/properFilename.md";
    if(!fs.existsSync(current_file)||fs.existsSync(new_name)){
        throw new Error("FS operation failed");
    }
    else{
        await fs.rename(current_file, new_name, function(err){
            if(err){
                throw err;
            }
        })
    }
};

rename();