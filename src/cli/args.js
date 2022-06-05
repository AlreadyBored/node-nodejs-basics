export const parseArgs = () => {
    let args = []
    process.argv.forEach((value)=>{
       args.push(value)
       });
    for (let i=2; i<args.length; i++) {
        let elem = args[i]
        if (elem[0]+elem[1]== '--'){
            console.log(elem.slice(2, elem.length) + ' is ' + args[i+1])
        }
    }
};

parseArgs()

//I am not sure is that implementation ok, should I define number and name of params somehow? 
