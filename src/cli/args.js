//6

const parseArgs = () => {
    let key;
    let value;
    let array = process.argv;

    for(let index = 2; array.length >index; index++){
        if(array[index].startsWith('--')){
            key=array[index].replace('--', '');
            index++;
            value= array[index];
            console.log(key + " is " + value);
        }
    }
};

parseArgs();