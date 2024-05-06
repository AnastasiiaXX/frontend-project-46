import result from '../__fixtures__/result.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import resultJSON from '../__fixtures__/resultJSON.js';
import genDiff from '../src/index.js';

test('check nested files with "stylish" formatter', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(result);
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(result);
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(result);
});

test('check nested files with "plain" formatter', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(resultPlain);
  expect(genDiff('file1.yaml', 'file2.yaml', 'plain')).toEqual(resultPlain);
  expect(genDiff('file1.yml', 'file2.yml', 'plain')).toEqual(resultPlain);
});

test('check nested files with "json" formatter', () => {
  expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(resultJSON);
  expect(genDiff('file1.yaml', 'file2.yaml', 'json')).toEqual(resultJSON);
  expect(genDiff('file1.yml', 'file2.yml', 'json')).toEqual(resultJSON);
});
