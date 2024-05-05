import _ from 'lodash';

const createSyntaxTree = (file1, file2) => {
  const keys = _.sortBy(_.union(_.keys(file1), _.keys(file2)));

  const tree = keys.map((key) => {
    if (!_.has(file1, key)) {
      return {
        key,
        type: 'added',
        newValue: file2[key],
      };
    }
    if (!_.has(file2, key)) {
      return {
        key,
        oldValue: file1[key],
        type: 'deleted',
      };
    }
    if (_.isEqual(file1[key], file2[key])) {
      return {
        key,
        type: 'unchanged',
        oldValue: file1[key],
      };
    }
    if (_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
      return {
        key,
        type: 'nested',
        children: createSyntaxTree(file1[key], file2[key]),
      };
    }

    return {
      key,
      type: 'updated',
      oldValue: file1[key],
      newValue: file2[key],
    };
  });

  return tree;
};

// console.log(112, createSyntaxTree('__fixtures__/file1.json', '__fixtures__/file2.json'));
export default createSyntaxTree;
