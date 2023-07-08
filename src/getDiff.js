import { readFileSync } from 'node:fs';
import path from 'node:path';
import _ from 'lodash';

const getJsonObj = (filePath) => {
  const normalizedPath = path.resolve(filePath);
  const rawData = readFileSync(normalizedPath);
  return JSON.parse(rawData);
}

const getDiff = (first, second) => {
  const firstObj = getJsonObj(first);
  const secondObj = getJsonObj(second);
  const resultKeys = [...new Set([...Object.keys(firstObj), ...Object.keys(secondObj)])];
  const sortedKeys = _.sortBy(resultKeys);
  const resultArr = [];
  for (const key of sortedKeys) {
    const firstExists = firstObj[key] !== undefined;
    const secondExists = secondObj[key] !== undefined;
    switch (true) {
      case firstExists && secondExists && firstObj[key] === secondObj[key]:
        resultArr.push(`\t  ${key}: ${firstObj[key]}`);
        break;
      case firstExists && secondExists && firstObj[key] !== secondObj[key]:
        resultArr.push(`\t- ${key}: ${firstObj[key]}`);
        resultArr.push(`\t+ ${key}: ${secondObj[key]}`);
        break;
      case firstExists && !secondExists:
        resultArr.push(`\t- ${key}: ${firstObj[key]}`);
        break;
      case !firstExists && secondExists:
        resultArr.push(`\t+ ${key}: ${secondObj[key]}`);
        break;
    }
  }
  return `{
${resultArr.join('\n')}
}`
}

export default getDiff;