const parseArgs = () => {
     const argumentsArray=process.argv.slice(2)
     const obj={}

     //make an object to parse
     for(let i=0;i<argumentsArray.length;i+=2){
      let fieldKey=argumentsArray[i].substring(2);
      obj[fieldKey]=argumentsArray[i+1]
     }

     //output
     console.log(Object.entries(obj)
     .map(([key,value])=>`${key} is ${value}`)
     .join(', '));
};

parseArgs();