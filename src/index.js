import path from 'path';
import parser from './parsers.js';
import createSyntaxTree from './createSyntaxTree.js';
import formatter from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const path1 = path.resolve(process.cwd(), '__fixtures__', filepath1);
  const path2 = path.resolve(process.cwd(), '__fixtures__', filepath2);

  const object1 = parser(path1);
  const object2 = parser(path2);

  return formatter(createSyntaxTree(object1, object2), format);
};
export default genDiff;
// console.log(1111, genDiff('file1.json', 'file2.json', 'plain'));
