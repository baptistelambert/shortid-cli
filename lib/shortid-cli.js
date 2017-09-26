const shortid = require('shortid');
const program = require('commander');

const { version } = require('../package.json');

program
  .version(version)
  .option(
    '--validate <id>',
    'Check if an id is a valid shortid'
  )
  .option(
    '-n --number <n>',
    'Number of id to generate',
    parseInt
  )
  .parse(process.argv);

if (program.validate) {
  const isValid = shortid.isValid(program.validate);
  console.log(isValid);
} else {
  if (program.number) {
    let i = 1;

    while (i <= program.number) {
      const id = shortid.generate();
      console.log(id);
      i += 1;
    }
  } else {
    const id = shortid.generate();
    console.log(id);
  }
}
