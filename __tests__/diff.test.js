import result from '../__fixtures__/result.js';
import genDiff from '../src/index.js';

test('check flat json file', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(result);
});

test('check flat yaml file', () => {
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(result);
});

test('check flat yml file', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(result);
});
