import fs from 'fs';


const create = async () => {
    const dir = './src/fs/files';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    else console.log("FS operation failed: The file folder has already been created")

    const data = 'I am fresh and young\n';
    if (fs.existsSync(dir+'/fresh.txt')){
        throw 'FS operation failed: The file folder has already been created';
    }
    else{
        fs.writeFile(dir+'/fresh.txt', data, function(error){
            if(error) throw error;
            else error;
        });
    }
};
await create();