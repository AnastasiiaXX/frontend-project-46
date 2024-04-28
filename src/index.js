import path from 'path';
import _ from 'lodash';
import parser from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const path1 = path.resolve(process.cwd(), '__fixtures__', filepath1);
  const path2 = path.resolve(process.cwd(), '__fixtures__', filepath2);

  const file1 = parser(path1);
  const file2 = parser(path2);

  const keys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));

  const difference = keys.map((key) => {
    if (!_.has(file1, key)) {
      return `  + ${key}: ${file2[key]}`;
    }
    if (!_.has(file2, key)) {
      return `  - ${key}: ${file1[key]}`;
    }
    if (_.isEqual(file1[key], file2[key])) {
      return `    ${key}: ${file1[key]}`;
    }
    return [`  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`];
  });

  return `{\n${difference.join('\n')}\n}`;
};
export default genDiff;
