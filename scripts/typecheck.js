#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const rootDir = path.resolve(__dirname, '..');
const ignore = new Set(['node_modules', 'dist', '.git']);

function walk(dir) {
  return fs.readdirSync(dir).flatMap((entry) => {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (ignore.has(entry)) {
        return [];
      }
      return walk(full);
    }
    return [full];
  });
}

function checkFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  try {
    new vm.Script(code, { filename: filePath });
    return null;
  } catch (error) {
    return error;
  }
}

function main() {
  const files = walk(rootDir).filter((file) => file.endsWith('.js'));
  const errors = [];
  for (const file of files) {
    const error = checkFile(file);
    if (error) {
      errors.push({ file, error });
    }
  }

  if (errors.length > 0) {
    console.error('Type check failed with the following syntax errors:');
    for (const { file, error } of errors) {
      console.error(`\n${file}\n${error.message}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log('Syntax verification completed successfully.');
}

if (require.main === module) {
  main();
}

module.exports = { main };
