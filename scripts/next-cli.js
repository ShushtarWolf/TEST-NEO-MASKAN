#!/usr/bin/env node
const { buildSite } = require('./build');
const { startDevServer } = require('./dev');

function printHelp() {
  console.log(`Usage: next <command>

Commands:
  build       Generate the static NeoMaskan site
  dev         Start the local development server (default)
  start       Alias for dev
  help        Show this message
`);
}

function main(argv) {
  const [, , command = 'dev'] = argv;

  switch (command) {
    case 'build':
      buildSite();
      break;
    case 'dev':
    case 'start':
      startDevServer();
      break;
    case 'help':
    case '--help':
    case '-h':
      printHelp();
      break;
    default:
      console.error(`Unknown command: ${command}`);
      printHelp();
      process.exitCode = 1;
  }
}

if (require.main === module) {
  main(process.argv);
}

module.exports = { main };
