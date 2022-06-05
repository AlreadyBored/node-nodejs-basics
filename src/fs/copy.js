import { promises as fs } from 'fs'
export const copy = async () => {
   
       let files= await fs.access("files");
        if(files!=undefined){
          console.log('Error:files folder not created')  
          return
        }
        
        try {
            let files_copy = await fs.access("files_copy")
                if(files_copy==undefined){
                     console.log('Error:files_copy folder already created')
                     return
                  }
        } catch {
             fs.mkdir('files_copy')
        } 



       

};

copy()