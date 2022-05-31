import fsp from 'fs/promises';
export const create = async () => {
    let path = './files/fresh.txt';
    let content = 'I am fresh and young'
    fsp.readFile(path)
        .catch(()=> fsp.writeFile(path, content))
        .then((data)=>{
            if(data){
                 throw new Error('FS operation failed')
            }
        })
        .catch(e=>console.log(e))
 // Write your code here
};
create()