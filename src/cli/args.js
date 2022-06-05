export const parseArgs = () => {
    let args = process.argv
    for(let i = 2;i<args.length;i++){
        if(i===args.length-1){
           return process.stdout.write(' '+args[i].split('-')[2].split('=').join(' is '))
        }
        process.stdout.write(args[i].split('-')[2].split('=').join(' is ')+',')
    }
};
parseArgs()