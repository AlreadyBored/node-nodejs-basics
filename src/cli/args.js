const parseArgs = () => {
    const args=process.argv.slice(2);
    const argsParsed={};
    for(var key=0; key<args.length; key+=2){
        if(args[key].slice(0,2)=='--'){
            var argName=args[key].slice(2);
        }
        else{
            var argName=args[key];
        }
        const value=args[key+1];
        argsParsed[argName]=value;
    }
    for(var argName in argsParsed){
        const value=argsParsed[argName];
        console.log(argName+" is "+value);
    }
};

parseArgs();