const prefix = '--';

const parseArgs = () => {

    const argsAcc = process.argv.slice(2).reduce( (acc,value,index,array) =>{

        if(value.startsWith(prefix)){

            const formattedProp = value.replace(prefix, '') + " is " + array[index + 1]
            return acc ? acc + ", " + formattedProp : formattedProp

        } else {

            return acc

        }

    },'')

    console.log(argsAcc)

}

parseArgs()
