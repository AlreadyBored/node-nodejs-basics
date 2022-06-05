export const parseArgs = () => {
    let result='';
    process.argv.forEach((value,index)=>{
        if(index > 1){
            console.log(index)
            if(index % 2 == 0){
                result+=value.substring(2)+" is ";
            }else {
                result+=value+",";
            }
        }

    });
    console.log(result.slice(0,result.length-1));
};
parseArgs();


