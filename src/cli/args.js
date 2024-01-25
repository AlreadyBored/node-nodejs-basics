const parseArgs = () => {
   const passedArgs = [...process.argv].slice(2);
   const parsedArgs = {};

   while(passedArgs.length > 0){
    const argName = passedArgs.shift().slice(2);
    const argValue = passedArgs.shift();

       parsedArgs[argName] = argValue;
   }
       console.log(Object.entries(parsedArgs).map(([key, value]) => `${key} is ${value}`).join(", "));
};

parseArgs();