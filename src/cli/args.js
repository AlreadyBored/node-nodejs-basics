const parseArgs = () => {
    const args = process.argv
    
    for(let i = 2; i < args.length; i++){
        if(i + 1 == args.length){
            process.stdout.write(" is " + args[i] + '\n')
        }
        else {
            if (i % 2 != 0) {
                process.stdout.write(" is " + args[i] + ", ")
            } else {
                process.stdout.write(args[i].slice(2))
            }
        }
    }
};

parseArgs();