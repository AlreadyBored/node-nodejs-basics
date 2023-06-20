const performCalculations = async () => {
    var {worker}=require('worker_threads');
    var cores=require('os').cpus().length;
    var results={};
    console.log(cores);
    workerMessage=(index,message)=>{
        results[index]=message;
        if(results.length==cores){
            console.log(results);
        }
    };

};

performCalculations();