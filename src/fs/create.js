const create = async () => {
    var fs=require('fs');
    var path="src/fs/files/fresh.txt";
    if(fs.existsSync(path)){
        throw new Error('FS operation failed')
    }else{
        await fs.appendFile(path,"I'm fresh and young",function (err){
            if (err) throw err;
        });
    }
}
create();