
const PREFIX = 'RSS_'

const parseEnv = () => {
   const args = process.argv.filter(arg => arg.toString()
   .substring(0,4)
   .includes(PREFIX) )
    console.log(args.toString())    
};

parseEnv();