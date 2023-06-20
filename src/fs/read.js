const read = async () => {
    var fs=require('fs');
    var path="src/fs/files/fileToRead.txt";
    if(fs.existsSync(path)){
        await fs.readFile(path,'utf-8',(err, data)=>{
            if(err){
                throw err;
            }
            console.log(data);
        })
    }
    else{
        throw new Error('FS operation failed');
    }
};

read();