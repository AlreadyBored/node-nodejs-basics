const list = async () => {
    var fs=require('fs');
    var path="src/fs/files/";
    if(fs.existsSync(path)){
        await fs.readdir(path, (err,files)=>{
            if(err){
                throw err;
            }
            files.forEach((file)=>{
                console.log(file);
            });
        });
    }
    else{
        throw new Error('FS operation failed');
    }
};

list();