import * as fs from 'fs';

export const create = async () => {

            fs.writeFile("./files/fresh.html", "This is a new Directory and File", (err)=>{
                if(err) return err;
                console.log("I am fresh and young");
            })
}
