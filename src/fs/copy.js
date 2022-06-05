import fsp from 'fs/promises';
export const copy = (dir, newDir) => {
        fsp.mkdir(newDir)
            .then(()=> fsp.readdir(dir))
            .then((files)=> {
                files.map((file)=>{
                     fsp.copyFile(`${dir}/${file}`,`${newDir}/${file}`)
                 })
            })
            .catch(()=>{
                   Promise.reject(new Error('FS operation failed!'));
        })
}
copy('files','files_copy')