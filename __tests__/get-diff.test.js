// @ts-check
import { describe, expect, test } from '@jest/globals';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import getDiff from '../src/getDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

describe('getDiff', () => {
  test('getDiff from JSON files', () => {
    expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(result);
  });
  test('getDiff from YAML files', () => {
    expect(getDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toBe(result);
  });
});
