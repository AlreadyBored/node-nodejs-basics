import util from 'node:util';

const parseArgs = () => {

    // util.parseArgs()

    const args = ['-f', '--bar', 'b'];
    const options = {
      foo: {
        type: 'boolean',
        short: 'f',
      },
      bar: {
        type: 'string',
      },
    };
    const {
      values,
      positionals,
    } = util.parseArgs( process.args );

    console.log(values, positionals);
};

parseArgs();


