const copy = async () => {
    var fs=require('fs');
    var path_base="src/fs";
    var path_files="src/fs/files";
    var path_copy="src/fs/files_copy";
    if(!fs.existsSync(path_files)||fs.existsSync(path_copy)){
        throw new Error( "FS operation failed")
    }
    else{
        await fs.cp(path_files,path_copy,{recursive:true}, (err)=>{
            if (err){
                throw err;
            }
        });
    }
    
};
copy();
