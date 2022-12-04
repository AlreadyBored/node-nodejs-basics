const parseEnv = () => {

    const arr = Object.entries(process.env).filter( ([key]) => {
        return key.includes("RSS_")
    })
    
    for(let i = 0; i < arr.length; i++){
        if(i < arr.length - 1){
            process.stdout.write(arr[i][0] + "=" +arr[i][1] + "; ")
        }else{
            process.stdout.write(arr[i][0] + "=" + arr[i][1] + "\n")
        }

    }
};

parseEnv();