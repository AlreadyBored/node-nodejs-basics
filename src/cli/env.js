const parseEnv = () => {
    var prefix="RSS_";
    for(var key in process.env){
        console.log(prefix+key+'='+process.env[key]);
    }
};
parseEnv();