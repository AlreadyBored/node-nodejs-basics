const parseArgs = () => {
    let input = process.argv;
    let result = [];

    for(let i = 0; i < input.length; i++){
        if(input[i].startsWith('--')) result.push(input[i].slice(2) + ' is ' + input[++i]);
    }

    console.log(result.join(', '));
};

parseArgs();