import path from 'node:path';
import { readFileSync } from 'node:fs';
import jsYaml from 'js-yaml';

const parseFile = (raw, extname) => {
  switch (extname) {
    case '.json':
      return JSON.parse(raw);
    case '.yaml':
    case '.yml':
      return jsYaml.load(raw);
    default:
      return '';
  }
};

const getFileObj = (filePath) => {
  const normalizedPath = path.resolve(filePath);
  const extname = path.extname(normalizedPath);
  const rawData = readFileSync(normalizedPath);
  return parseFile(rawData, extname);
};

export default getFileObj;
