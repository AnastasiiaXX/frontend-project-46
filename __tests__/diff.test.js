import result from '../__fixtures__/result.js';
import genDiff from '../src/index.js';

test('check flat json file', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(result);
});
