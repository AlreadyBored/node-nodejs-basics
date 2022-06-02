import fsp from 'fs/promises';
export const copy = (dir, newDir) => {
    fsp.readdir(newDir)
        .catch((e)=>fsp.mkdir(newDir))
        .then(()=> fsp.readdir(dir))
        .then((files)=>{
            files.map((file)=>{
                fsp.copyFile(`${dir}/${file}`,`${newDir}/${file}`)
            })
        })
        .catch((e)=> console.log(e))

};
copy('files','files_copy')