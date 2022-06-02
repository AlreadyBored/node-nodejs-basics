import fsp from 'fs/promises';

export const create = (path,content ) => {
    fsp.readFile(path)
        .then((data)=>{
            if (data){
              Promise.reject(new Error('dsadsa'))
            }
        })
        .catch((e)=> fsp.writeFile(path, content))

};
create('./files/fresh.txt','I am fresh and young')