 const parseEnv = () => {
     const arr = process.env;
     let result;
     Object.keys(arr).forEach(function(key) {
         if(key.indexOf('RSS_') + 1) {
             result+=key+"="+this[key]+"; ";
         }
     }, arr);
     console.log(result)

};
 export default parseEnv();