const shortid = require('shortid');
const program = require('commander');

const { version } = require('../package.json');

program
  .version(version)
  .option(
    '--validate <id>',
    'Check if an id is a valid shortid'
  )
  .parse(process.argv);

if (program.validate) {
  const isValid = shortid.isValid(program.validate);
  console.log(isValid);
} else {
  const id = shortid.generate();
  console.log(id);
}
