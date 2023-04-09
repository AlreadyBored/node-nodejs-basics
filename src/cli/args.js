const parseArgs = () => {
    const args = process.argv.slice(2);
    let values = [];
    for(let i=0; i<args.length; i+=2){
        let value = '';
        value = args[i].substring(2) + ' is ' + args[i+1];
        values.push(value);
    }
    
    console.log(values.join(', ')); 
};

parseArgs();