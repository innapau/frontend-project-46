#!/usr/bin/env node
import { Command } from 'commander';
import getDiff from '../src/getDiff.js';

const genDiff = new Command();

genDiff
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

genDiff.argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((file1, file2) => {
    console.log(getDiff(file1, file2));
  });

genDiff.parse();
