import result from '../__fixtures__/result.js';
import genDiff from '../src/index.js';

test('check nested json file', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(result);
});

test('check nested yaml file', () => {
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(result);
});

test('check nested yml file', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(result);
});
