const remove = async () => {
    var fs=require('fs');
    var file="src/fs/files/fileToRemove.txt";
    if(fs.existsSync(file)){
        await fs.unlink(file, function (err){
            if(err){
                throw err;
            }
        });
    }
    else{
        throw new Error('FS operation failed');
    }
};

remove();