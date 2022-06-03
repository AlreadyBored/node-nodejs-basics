export const parseEnv = () => {
   // console.log(Object.keys(process.env))
   Object.keys(process.env).forEach(key=>{
      if(key.startsWith('RSS_'))
         console.log(`${key} is ${process.env[key]}`)
   })
};
parseEnv()