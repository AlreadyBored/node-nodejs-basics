const spawnChildProcess = async (args) => {
    args=args.slice(2);
    const child=require('./files/script.js');
    
};

// Put your arguments in function call to test this functionality
spawnChildProcess(process.argv);
